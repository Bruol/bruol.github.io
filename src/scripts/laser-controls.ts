import type { LaserInstance, LaserOptions } from './vendor/laser';
import { laserSettings } from './laser-settings';
import './laser-controls.css';

type NumericOption = Exclude<keyof LaserOptions, 'color'>;
const sliders: [NumericOption, string, number, number, number][] = [
  ['speed', 'Animation speed', 0, 3, .05],
  ['wave', 'Wave amplitude (px)', 0, 40, .5],
  ['flicker', 'Flicker', 0, 1, .01],
  ['reactivity', 'Scroll reactivity', 0, 3, .05],
  ['width', 'Beam width', .05, 1, .01],
  ['thickness', 'Core thickness (px)', .5, 24, .5],
  ['core', 'Core intensity', 0, 2, .05],
  ['radius', 'Glow radius (px)', .5, 60, .5],
  ['glow', 'Glow brightness', 0, 3, .05],
  ['offset', 'Height from bottom (px)', 0, 220, 1],
  ['reveal', 'Reveal height (px)', 0, 240, 1],
  ['heat', 'Reveal heat', 0, 1.5, .05],
  ['shimmer', 'Heat shimmer (px)', 0, 30, .5],
  ['sparkle', 'Sparkle', 0, 2, .05],
];
const storageKey = 'homepage-laser-v1';

export function mountLaserControls(instance: LaserInstance): () => void {
  let settings = { ...laserSettings };
  // Storage can be unavailable in private browsing or restricted embeds.
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && typeof saved === 'object') {
      for (const [key, , min, max] of sliders) {
        if (typeof saved[key] === 'number' && Number.isFinite(saved[key])) {
          settings[key] = Math.min(max, Math.max(min, saved[key]));
        }
      }
      if (Array.isArray(saved.color) && saved.color.length === 3 &&
          saved.color.every((v: unknown) => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 1)) {
        settings.color = saved.color;
      }
    }
  } catch {}
  instance.setOptions(settings);

  const panel = document.createElement('details');
  panel.className = 'laser-dev-controls';
  const summary = document.createElement('summary');
  summary.textContent = 'Laser controls · dev';
  panel.append(summary);
  const body = document.createElement('div');
  body.className = 'laser-dev-body';
  const note = document.createElement('p');
  note.textContent = 'Live preview. Settings stay in this browser. Copy to src/scripts/laser-settings.ts to publish. Scroll reactivity boosts brightness, glow size, and motion; 0 turns it off. Reveal heat and sparkle need a nonzero reveal height. Shimmer needs browser HTML-in-canvas support.';
  body.append(note);

  function apply() {
    instance.setOptions(settings);
    try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch {}
  }

  const inputs = new Map<NumericOption, { input: HTMLInputElement; output: HTMLOutputElement }>();
  for (const [key, title, min, max, step] of sliders) {
    const label = document.createElement('label');
    label.htmlFor = `laser-dev-${key}`;
    const caption = document.createElement('span');
    caption.textContent = title;
    const output = document.createElement('output');
    output.setAttribute('for', `laser-dev-${key}`);
    const input = document.createElement('input');
    Object.assign(input, { id: `laser-dev-${key}`, type: 'range', min: String(min), max: String(max), step: String(step) });
    input.addEventListener('input', () => {
      settings[key] = input.valueAsNumber;
      output.value = input.value;
      apply();
    });
    label.append(caption, output, input);
    inputs.set(key, { input, output });
    body.append(label);
  }

  const colorLabel = document.createElement('label');
  colorLabel.className = 'laser-dev-color';
  colorLabel.textContent = 'Beam color';
  const color = document.createElement('input');
  color.type = 'color';
  color.addEventListener('input', () => {
    settings.color = [1, 3, 5].map((start) => parseInt(color.value.slice(start, start + 2), 16) / 255) as [number, number, number];
    apply();
  });
  colorLabel.append(color);
  body.append(colorLabel);

  function syncInputs() {
    for (const [key, { input, output }] of inputs) {
      input.value = String(settings[key]);
      output.value = input.value;
    }
    color.value = '#' + settings.color.map((channel) => Math.round(channel * 255).toString(16).padStart(2, '0')).join('');
  }
  syncInputs();

  const actions = document.createElement('div');
  actions.className = 'laser-dev-actions';
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.textContent = 'Reset defaults';
  reset.addEventListener('click', () => {
    settings = { ...laserSettings };
    syncInputs();
    apply();
  });
  const copy = document.createElement('button');
  copy.type = 'button';
  copy.textContent = 'Copy settings';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(settings, null, 2));
      status.textContent = 'Settings copied.';
    } catch {
      status.textContent = 'Clipboard unavailable. Select the settings below to copy.';
      const fallback = document.createElement('textarea');
      fallback.readOnly = true;
      fallback.setAttribute('aria-label', 'Laser settings to copy');
      fallback.value = JSON.stringify(settings, null, 2);
      status.replaceChildren(status.textContent, fallback);
      fallback.select();
    }
  });
  actions.append(reset, copy);
  body.append(actions, status);
  panel.append(body);
  document.body.append(panel);
  return () => panel.remove();
}

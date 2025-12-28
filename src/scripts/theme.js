/**
 * Theme Manager
 * Manages theme palette and light/dark mode preferences
 */
const ThemeManager = {
  STORAGE_PALETTE: "theme-palette",
  STORAGE_MODE: "theme-mode",
  DEFAULT_PALETTE: "cream",
  PALETTES: ["cream", "gray", "ivory"],

  currentPalette: null,
  currentMode: null,

  /**
   * Initialize the theme manager
   */
  init() {
    this.loadPreferences();
    this.renderChooser();
    this.bindEvents();
    this.watchSystemPreference();
  },

  /**
   * Get the system's preferred color scheme
   * @returns {string} "light" or "dark"
   */
  getSystemMode() {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  },

  /**
   * Load preferences from localStorage or use defaults
   */
  loadPreferences() {
    const savedPalette = localStorage.getItem(this.STORAGE_PALETTE);
    const savedMode = localStorage.getItem(this.STORAGE_MODE);

    this.currentPalette = this.PALETTES.includes(savedPalette)
      ? savedPalette
      : this.DEFAULT_PALETTE;

    this.currentMode =
      savedMode === "light" || savedMode === "dark"
        ? savedMode
        : this.getSystemMode();

    this.applyTheme();
  },

  /**
   * Apply the current theme to the document
   */
  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.currentPalette);
    document.documentElement.setAttribute("data-mode", this.currentMode);
  },

  /**
   * Set the color palette
   * @param {string} palette - The palette name (cream, gray, ivory)
   */
  setPalette(palette) {
    if (!this.PALETTES.includes(palette)) {
      return;
    }
    this.currentPalette = palette;
    this.applyTheme();
    this.save();
    this.updateChooserState();
  },

  /**
   * Set the color mode
   * @param {string} mode - The mode (light or dark)
   */
  setMode(mode) {
    if (mode !== "light" && mode !== "dark") {
      return;
    }
    this.currentMode = mode;
    this.applyTheme();
    this.save();
    this.updateChooserState();
  },

  /**
   * Toggle between light and dark mode
   */
  toggleMode() {
    this.setMode(this.currentMode === "light" ? "dark" : "light");
  },

  /**
   * Save preferences to localStorage
   */
  save() {
    localStorage.setItem(this.STORAGE_PALETTE, this.currentPalette);
    localStorage.setItem(this.STORAGE_MODE, this.currentMode);
  },

  /**
   * Render the theme chooser UI into the container
   */
  renderChooser() {
    const container = document.querySelector(".theme-chooser");
    if (!container) {
      return;
    }

    const html = `
      <fieldset class="theme-chooser__fieldset">
        <legend class="sr-only">Theme settings</legend>
        <div class="theme-chooser__palettes" role="group" aria-label="Color palette">
          <button type="button" class="theme-chooser__btn theme-chooser__btn--cream" data-palette="cream" aria-pressed="false" aria-label="Cream palette"></button>
          <button type="button" class="theme-chooser__btn theme-chooser__btn--gray" data-palette="gray" aria-pressed="false" aria-label="Gray palette"></button>
          <button type="button" class="theme-chooser__btn theme-chooser__btn--ivory" data-palette="ivory" aria-pressed="false" aria-label="Ivory palette"></button>
        </div>
        <button type="button" class="theme-chooser__mode" aria-pressed="false" aria-label="Toggle dark mode">
          <svg class="theme-chooser__icon theme-chooser__icon--sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </g>
          </svg>
          <svg class="theme-chooser__icon theme-chooser__icon--moon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </fieldset>
    `;

    container.innerHTML = html;
    this.updateChooserState();
  },

  /**
   * Update aria-pressed states on chooser buttons
   */
  updateChooserState() {
    const container = document.querySelector(".theme-chooser");
    if (!container) {
      return;
    }

    // Update palette buttons
    const paletteButtons = container.querySelectorAll("[data-palette]");
    paletteButtons.forEach((button) => {
      const isPressed = button.dataset.palette === this.currentPalette;
      button.setAttribute("aria-pressed", isPressed.toString());
    });

    // Update mode toggle button
    const modeButton = container.querySelector(".theme-chooser__mode");
    if (modeButton) {
      const isDark = this.currentMode === "dark";
      modeButton.setAttribute("aria-pressed", isDark.toString());
      modeButton.setAttribute(
        "aria-label",
        isDark ? "Toggle light mode" : "Toggle dark mode",
      );
    }
  },

  /**
   * Bind event listeners for the theme chooser
   */
  bindEvents() {
    const container = document.querySelector(".theme-chooser");
    if (!container) {
      return;
    }

    // Palette button clicks
    container.addEventListener("click", (event) => {
      const paletteButton = event.target.closest("[data-palette]");
      if (paletteButton) {
        this.setPalette(paletteButton.dataset.palette);
        return;
      }

      const modeButton = event.target.closest(".theme-chooser__mode");
      if (modeButton) {
        this.toggleMode();
      }
    });

    // Keyboard navigation for palette buttons
    container.addEventListener("keydown", (event) => {
      const paletteButton = event.target.closest("[data-palette]");
      if (!paletteButton) {
        return;
      }

      const paletteButtons = Array.from(
        container.querySelectorAll("[data-palette]"),
      );
      const currentIndex = paletteButtons.indexOf(paletteButton);

      let nextIndex = -1;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % paletteButtons.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex =
          (currentIndex - 1 + paletteButtons.length) % paletteButtons.length;
      }

      if (nextIndex !== -1) {
        event.preventDefault();
        paletteButtons[nextIndex].focus();
      }
    });
  },

  /**
   * Watch for system preference changes
   */
  watchSystemPreference() {
    if (!window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      // Only update if user hasn't set a preference
      const savedMode = localStorage.getItem(this.STORAGE_MODE);
      if (!savedMode) {
        this.currentMode = event.matches ? "dark" : "light";
        this.applyTheme();
        this.updateChooserState();
      }
    };

    // Modern browsers all support addEventListener
    mediaQuery.addEventListener("change", handleChange);
  },
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ThemeManager.init());
} else {
  ThemeManager.init();
}

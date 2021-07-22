(function () {
  const RESTRICTED_TEMPLATES = [
    'homepage',
    'office',
    'domain',
    'team',
    'news',
    'role',
    'tarifs',
    'cms',
  ].map((name) => `templates/${name}.php`);

  const ALLOWED_MENUS = ['articles'];

  const getCurrentMenuName = () => {
    const name = document.querySelector('a.wp-menu-open .wp-menu-name');

    if (!name) return;

    return name.textContent?.toLocaleLowerCase();
  };

  const shouldHideEditor = (select) => {
    if (ALLOWED_MENUS.includes(getCurrentMenuName())) {
      return false;
    }

    if (select) {
      console.log(select.value);
    }

    if (select) {
      return RESTRICTED_TEMPLATES.includes(select.value);
    }

    return true;
  };

  const updateBodyClass = (state) => {
    if (state) {
      document.body.classList.add('mashvp-disable-gutenberg');
    } else {
      document.body.classList.remove('mashvp-disable-gutenberg');
    }
  };

  const updateEditorState = (select) =>
    updateBodyClass(shouldHideEditor(select));

  const init = function () {
    setTimeout(() => {
      updateEditorState();

      const select = document.querySelector(
        '.editor-page-attributes__template select.components-select-control__input'
      );

      if (!select) return;

      updateEditorState(select);
      select.addEventListener('change', () => updateEditorState(select));
    }, 500);
  };

  document.addEventListener('DOMContentLoaded', init);
})();

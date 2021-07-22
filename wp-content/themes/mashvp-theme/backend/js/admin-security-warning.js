(function() {
  const init = function() {
    const target = document.querySelector('.wp-header-end');
    const wrapper = document.createElement('div');
    const inner = document.createElement('div');

    inner.innerHTML =
      'Il est important de garder un mot de passe complexe, ce qui renforce la sécurité et baisse le risque de piratage.<br />Le changement de mot de passe par un plus simple dégage la responsabilité de l’agence en cas de piratage du site.<br />Tout frais de correction sera donc à la charge du client.';

    wrapper.style.display = 'block';
    wrapper.style.margin = '1rem 0';

    inner.style.display = 'inline-block';
    inner.style.padding = '0.5rem 1rem 0.5rem 0.75rem';
    inner.style.borderRadius = '3px';
    inner.style.borderLeft = '0.25rem solid red';
    inner.style.backgroundColor = '#ffffff';

    wrapper.appendChild(inner);
    target.parentNode.insertBefore(wrapper, target);
  };

  document.addEventListener('DOMContentLoaded', init);
})();

var dbFooterMarkup = `
<footer data-public-footer class="public-site-theme public-footer" role="contentinfo">
  <div data-footer-mast class="public-footer-main">
    <section data-footer-brand class="public-footer-brand">
      <a href="https://dustbowl.games" class="public-footer-home-link" aria-label="DustBowl.Games home">
        <img data-footer-logo src="https://assets.dustbowl.games/cms/branding/logo-wordmark-dark.png" alt="DustBowl.Games" width="193" height="39" loading="lazy">
      </a>
      <p class="public-footer-tagline">High-performance gaming servers &amp; community infrastructure.</p>
      <a href="https://status.dustbowl.games" data-footer-status class="public-footer-status-badge" aria-label="Service Status: All systems operational">
        <span class="public-footer-status-dot" aria-hidden="true"></span>
        <span>All Systems Operational</span>
      </a>
    </section>

    <nav aria-label="Explore DustBowl" class="public-footer-directory">
      <div data-footer-group="dustbowl-servers" class="public-footer-directory-group">
        <h2>Servers</h2>
        <ul>
          <li><a href="https://dustbowl.games/game-servers">Browse All Servers</a></li>
          <li><a href="https://dustbowl.games/game-servers">Hosted Memberships</a></li>
          <li><a href="https://dustbowl.games/game-servers">Locations &amp; Fleets</a></li>
        </ul>
      </div>
      <div data-footer-group="community" class="public-footer-directory-group">
        <h2>Community</h2>
        <ul>
          <li><a href="https://discord.dustbowl.games" target="_blank" rel="noopener">Discord Community</a></li>
          <li><a href="https://staging.dustbowl.games/community">Community Hub</a></li>
          <li><a href="https://dustbowl.games/code-of-conduct">Code of Conduct</a></li>
          <li><a href="https://dustbowl.games/donate">Fuel DustBowl</a></li>
        </ul>
      </div>
      <div data-footer-group="resources" class="public-footer-directory-group">
        <h2>Resources</h2>
        <ul>
          <li><a href="https://dustbowl.games/kb">Knowledge Base</a></li>
          <li><a href="https://status.dustbowl.games">Fleet Status</a></li>
          <li><a href="https://dustbowl.games/about">About DustBowl</a></li>
          <li><a href="https://dustbowl.games/contact">Contact Support</a></li>
        </ul>
      </div>
    </nav>

    <section id="public-footer-newsletter" data-footer-newsletter-panel class="public-footer-newsletter-panel">
      <h2 id="public-footer-newsletter-title">Built for players who <span>give a damn.</span></h2>
      <p class="public-footer-cta-desc">Bare-metal nodes, zero sponsored clutter, and dedicated community moderators.</p>
      <a href="https://discord.dustbowl.games" class="public-footer-discord-btn" target="_blank" rel="noopener">Join Our Discord</a>
    </section>
  </div>

  <section class="public-footer-utility" aria-labelledby="public-footer-social-title">
    <h2 id="public-footer-social-title" data-footer-connect-label>Connect with us</h2>
    <nav aria-label="DustBowl social profiles" class="public-footer-social-rail public-footer-socials">
      <a href="https://discord.dustbowl.games" data-footer-social="Discord" aria-label="DustBowl on Discord" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M19.5 5.3A16 16 0 0 0 15.4 4l-.5 1.1a15 15 0 0 0-5.8 0L8.5 4a16 16 0 0 0-4.1 1.3C1.8 9.2 1.1 13 1.5 16.8A16.5 16.5 0 0 0 6.6 19l1.2-1.7c-.7-.3-1.4-.7-2-1.2l.5-.4c3.8 1.8 7.9 1.8 11.7 0l.5.4c-.7.5-1.3.9-2 1.2l1.2 1.7a16.5 16.5 0 0 0 5.1-2.2c.5-4.4-.8-8.1-3.3-11.5ZM8.7 14.6c-1.1 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4c1.2 0 2.1 1.1 2.1 2.4s-.9 2.4-2.1 2.4Zm6.8 0c-1.1 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4c1.2 0 2.1 1.1 2.1 2.4s-.9 2.4-2.1 2.4Z"/></svg>
      </a>
      <a href="https://x.com/DustBowlGames" data-footer-social="X" aria-label="DustBowl on X" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M18.2 2.3h3.4l-7.3 8.3 8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.6l7.8-8.9L1.2 2.3h6.9l4.7 6.2 5.4-6.2Zm-1.1 17.5h1.8L7.1 4.1H5.2l11.9 15.7Z"/></svg>
      </a>
      <a href="https://www.youtube.com/@DustBowlGames" data-footer-social="YouTube" aria-label="DustBowl on YouTube" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
      </a>
      <a href="https://www.twitch.tv/dustbowlgames" data-footer-social="Twitch" aria-label="DustBowl on Twitch" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M6 0 1.7 4.3v15.4h5.2V24l4.3-4.3h3.4l7.7-7.7V0H6Zm14.6 11.1-3.5 3.5h-3.4l-3 3v-3H6.9V1.7h13.7v9.4Zm-2.6-6.4h-1.7v5.2H18V4.7Zm-4.7 0h-1.7v5.2h1.7V4.7Z"/></svg>
      </a>
      <a href="https://github.com/DustBowl-Games" data-footer-social="GitHub" aria-label="DustBowl on GitHub" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg>
      </a>
      <a href="https://steamcommunity.com/groups/dustbowl-games" data-footer-social="Steam" aria-label="DustBowl on Steam" target="_blank" rel="noopener">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>
      </a>
    </nav>
    <div class="public-footer-legal-cluster">
      <nav aria-label="Legal" class="public-footer-legal-links">
        <a href="https://dustbowl.games/privacy-policy" data-footer-legal-link="Privacy Policy">Privacy Policy</a>
        <a href="https://dustbowl.games/terms-of-service" data-footer-legal-link="Terms of Service">Terms of Service</a>
        <a href="https://dustbowl.games/code-of-conduct" data-footer-legal-link="Code of Conduct">Code of Conduct</a>
        <a href="https://dustbowl.games/sla" data-footer-legal-link="SLA">SLA</a>
        <a href="https://dustbowl.games/returns-and-refunds" data-footer-legal-link="Returns &amp; Refunds">Returns &amp; Refunds</a>
      </nav>
      <div data-footer-legal class="public-footer-legal">&copy; 2026 DustBowl.Games. All Rights Reserved.</div>
      <p data-footer-disclaimer class="public-footer-disclaimer">DustBowl.Games is not affiliated with or endorsed by any game developer or publisher. All trademarks and registered trademarks are the property of their respective owners.</p>
    </div>
  </section>
</footer>
`;

function injectDbFooter() {
  var sapperFooter = document.querySelector('footer.svelte-jbr799') || document.querySelector('#sapper > footer');
  if (sapperFooter) {
    if (!sapperFooter.querySelector('.public-footer-main')) {
      sapperFooter.innerHTML = dbFooterMarkup;
    }
    return;
  }

  var sapper = document.getElementById('sapper');
  if (sapper && !sapper.querySelector('.public-footer-main')) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = dbFooterMarkup;
    sapper.appendChild(wrapper.firstElementChild);
    return;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectDbFooter);
} else {
  injectDbFooter();
}

// Ensure Sapper reactive router doesn't blow away our markup
var observer = new MutationObserver(function() {
  var sapperFooter = document.querySelector('footer.svelte-jbr799') || document.querySelector('#sapper > footer');
  if (sapperFooter && !sapperFooter.querySelector('.public-footer-main')) {
    sapperFooter.innerHTML = dbFooterMarkup;
  }
});

if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
}

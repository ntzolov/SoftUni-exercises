import { html } from '../../node_modules/lit-html/lit-html.js';

// TODO replace with actual stuff
export const layoutTemplate = (userData, content) =>
  html`
    <header>
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>
        ${userData
          ? html`
              <div class="user">
                <a href="/create">Create Offer</a>
                <a href="/logout">Logout</a>
              </div>
            `
          : html`
              <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>
            `}
      </nav>
    </header>

    <div id="wrapper">
      <main>${content}</main>
    </div>
    <footer>
      <p>@ClearCareer</p>
    </footer>
  `;

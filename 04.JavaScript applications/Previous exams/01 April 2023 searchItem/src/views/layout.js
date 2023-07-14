import { html } from '../../node_modules/lit-html/lit-html.js';

export const layout = (userData, content) => html`
  <div id="wrapper">
    <header>
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Fruits</a>
          <a href="/search">Search</a>
        </div>

        <!-- Logged-in users -->
        ${userData
          ? html`
              <div class="user">
                <a href="/add-fruit">Add Fruit</a>
                <a href="/logout">Logout</a>
              </div>
            `
          : html`
              <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>
            `}

        <!-- Guest users -->
      </nav>
    </header>
    <main>${content}</main>
  </div>
  <footer>
    <p>@Fruitipedia</p>
  </footer>
`;

import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { del } from '../services/api.js';
import { deleteOfferById, getOfferById } from '../services/data.js';
import { getUser } from '../util.js';

const detailsTemplate = (offer, userData, isOwner, deleteOffer, onApply) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category:
        <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary:
        <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>
        Applications:
        <strong id="applications">0</strong>
      </p>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${isOwner
          ? html`
              <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${deleteOffer}>Delete</a>
            `
          : nothing}

        <!--Bonus - Only for logged-in users ( not authors )-->
        ${userData && !isOwner
          ? html`
              <a href="" id="apply-btn" @click=${onApply}>Apply</a>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const offerId = ctx.params.id;
  const userData = getUser();
  const offer = await getOfferById(offerId);

  let isOwner;
  if (userData) {
    if (offer._ownerId === userData._id) {
      isOwner = true;
    }
  }

  async function deleteOffer(e) {
    e.preventDefault();

    await deleteOfferById(ctx.params.id);
    ctx.page.redirect('/dashboard');
  }

  function onApply(e) {
    const applications = document.getElementById('applications');
    let applicationsValue = Number(applications.textContent);
    applicationsValue++;
    applications.textContent = applicationsValue;
    document.getElementById('apply-btn').style.display = 'none';
  }

  ctx.render(detailsTemplate(offer, userData, isOwner, deleteOffer, onApply));
}

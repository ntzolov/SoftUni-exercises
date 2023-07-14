import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { addApplication, getTotalApplications, isUserApplied } from '../services/apply.js';
import { deleteOfferById, getOfferById } from '../services/data.js';
import { getUser } from '../util.js';

const detailsTemplate = (offer, userData, deleteOffer, onApply) => html`
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
        <strong id="applications">${offer.totalApplications}</strong>
      </p>

      <div id="action-buttons">
        ${offer.isOwner
          ? html`
              <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${deleteOffer}>Delete</a>
            `
          : nothing}
        ${userData && !offer.isOwner && !offer.isApplied
          ? html`
              <a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>
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
    isOwner = offer._ownerId === userData._id;
    offer.isOwner = isOwner;
    const isCurrUserApplied = await isUserApplied(offerId, userData._id);
    offer.isApplied = isCurrUserApplied === 0 ? false : true;
  } else {
    offer.isApplied = {};
  }

  offer.totalApplications = await getTotalApplications(offerId);
  console.log(offer.isApplied, offer.isOwner, offer.totalApplications);

  ctx.render(detailsTemplate(offer, userData, deleteOffer, onApply));

  async function deleteOffer(e) {
    e.preventDefault();

    await deleteOfferById(ctx.params.id);
    ctx.page.redirect('/dashboard');
  }

  async function onApply() {
    await addApplication({ offerId: offerId });
    ctx.page.redirect('/details/' + offerId);
  }
}

import React from 'react';
class CardsForm extends React.Component {
  render() {
    return (
      <section class="cards__section-2">
        <div class="wrapper">
          <form id="form" action="" method="POST">
            <fieldset class="form__fieldset">
              <legend class="form__fielset-legend">Elegir tema</legend>
              <div class="form__design js__collapsable">
                <h2 class="form__design-title form-title title-1">Diseña</h2>
              </div>
              <div class="form__design-content design-container collapsable-container">
                <h3 class="form-colors-text">Colores:</h3>
                <div class="theme-container">
                  <div class="theme">
                    <label for="t1" class="theme__row">
                      <input
                        type="radio"
                        class="theme__radio theme__radio1 js__theme__radio"
                        id="t1"
                        name="palette"
                        value="1"
                      />
                      <ul class="colors">
                        {/* <li class="color" style="background-color:#114e4e">
                          Eden
                  </li>
                        <li class="color" style="background-color:#438792">
                          Wedgewood
                  </li>
                        <li class="color" style="background-color:#a2deaf">
                          Celadon
                  </li> */}
                      </ul>
                    </label>
                  </div>
                  <div class="theme">
                    <label for="t2" class="theme__row">
                      <input
                        type="radio"
                        class="theme__radio theme__radio2 js__theme__radio"
                        id="t2"
                        name="palette"
                        value="2"
                      />
                      <ul class="colors">
                        {/* <li class="color" style="background-color: #420101">
                          Chocolate
                  </li>
                        <li class="color" style="background-color: #bd1010">
                          Thunderbird
                  </li>
                        <li class="color" style="background-color: #e95626">
                          Flamingo
                  </li> */}
                      </ul>
                    </label>
                  </div>
                  <div class="theme">
                    <label for="t3" class="theme__row">
                      <input
                        type="radio"
                        class="theme__radio theme__radio3 js__theme__radio"
                        id="t3"
                        name="palette"
                        value="3"
                      />
                      <ul class="colors">
                        {/* <li class="color" style="background-color: #3e5b65">
                          Fiord
                  </li>
                        <li class="color" style="background-color: #eab052">
                          Ronchi
                  </li>
                        <li class="color" style="background-color: #a0c0cf">
                          Rock Blue
                  </li> */}
                      </ul>
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form__fieldset collapsed">
              <legend class="form__fielset-legend">Completar información</legend>
              <div class="form__fill js__collapsable">
                <h2 class="form__fill-title form-title title-2">Rellena</h2>
              </div>
              <div class="form__fill-content fill-container collapsable-container">
                <div class="form__fill-input">
                  <label for="form-name" class="form-label">Nombre completo</label>
                  <input
                    type="text"
                    class="form-text js__form-name"
                    id="form-name"
                    name="name"
                    placeholder="Ej: Sally Jill"
                    required
                  />
                </div>
                <div class="form__fill-input">
                  <label for="form-career" class="form-label">Puesto</label>
                  <input
                    type="text"
                    class="form-text js__form-job"
                    id="form-career"
                    name="job"
                    placeholder="Ej: Front-end unicorn"
                    required
                  />
                </div>
                <div class="form__fill-input">
                  <label for="form-photo" class="form-label">Imagen de perfil</label>
                  <input
                    type="file"
                    class="form-text form-file hidden js__profile-upload-btn"
                    id="form-photo"
                    name="photo"
                    required
                  />
                  <button class="form-photo-button button-addImage js__profile-trigger">
                    Añadir imagen
            </button>
                  <div class="form-photo-preview js__profile-preview"></div>
                </div>
                <div class="form__fill-input">
                  <label for="form-email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-text js__form-mail"
                    id="form-email"
                    name="email"
                    placeholder="Ej: sally.hill@gmail.com"
                    required
                  />
                </div>
                <div class="form__fill-input">
                  <label for="form-tel" class="form-label">Teléfono</label>
                  <input
                    type="tel"
                    class="form-text js__form-phone"
                    id="form-tel"
                    name="phone"
                    placeholder="Ej: 555-55-55-55"
                  />
                </div>
                <div class="form__fill-input">
                  <label for="form-linkedin" class="form-label">Linkedin</label>
                  <input
                    type="text"
                    class="form-text js__form-linkedin"
                    id="form-linkedin"
                    name="linkedin"
                    placeholder="Ej: @sally-hill"
                    required
                  />
                </div>
                <div class="form__fill-input">
                  <label for="form-github" class="form-label">Github</label>
                  <input
                    type="text"
                    class="form-text js__form-github"
                    id="form-github"
                    name="github"
                    placeholder="Ej: @sally-hill"
                    required
                  />
                </div>
              </div>
            </fieldset>
            <div class="js__submit-container collapsed">
              <div class="submit-share js__collapsable">
                <h2 class="submit-share form-title title-3">Comparte</h2>
              </div>
              <div class="submit-container collapsable-container">
                <button
                  class="button-create collapsebtn js__submit"
                  type="submit"
                  id="submit"
                >
                  Crear tarjeta
                </button>
              </div>
            </div>
          </form>

          <div class="share-container collapsable-container hidden">
            <p class="card-success">La tarjeta ha sido creada:</p>
            <p class="share-link js__response"></p>
            <a class="link-twitter js__link-twitter"
              href="" target="_blank">
              Compartir en Twitter</a>
          </div>

        </div>
      </section>
    )
  }
}
export default CardsForm;
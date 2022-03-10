(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const buttonUnlock = document.querySelector(`[data-id="unlock"]`); // Кнопка на главной странице

    const profileNavBtn = document.querySelector('.profile__nav');
    const profileBtnBack = document.querySelector('.catalog__back-btn-js');
    const profile = document.querySelector('.profile');
    const profileLogo = document.querySelector('.catalog__logo-js');
    const catalogContainer = document.querySelector('.catalog__main-container');
    const modal = document.querySelector('.modal-js');
    const closeModalBtn = document.querySelector('.js-modal-close-button');
    const no = document.querySelector('.btn-no-js');
    const yes = document.querySelector('.btn-yes-js');
    let formActive = true;

    const closeModal = () => {
      modal.classList.remove('modal_opened');
      setTimeout(() => {
        modal.classList.remove('modal_form-active');
      }, 500);
    };

    const checkKeyPress = e => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    const checkPressOverlay = e => {
      if (e.target === modal) {
        closeModal();
      }
    };

    const openForm = () => {
      modal.classList.add('modal_form-active');
    };

    yes.addEventListener("click", openForm);
    no.addEventListener("click", closeModal);
    modal.addEventListener("click", e => checkPressOverlay(e));
    closeModalBtn.addEventListener('click', closeModal);
    document.addEventListener("keydown", checkKeyPress);
    profileBtnBack.addEventListener('click', () => {
      profile.classList.remove('profile_active');
      setTimeout(() => {
        catalogContainer.classList.remove('catalog__main-container_hidden');
        profileLogo.classList.remove('catalog__logo_hidden');
        document.querySelector('.profile__gallery-js').innerHTML = '';
      }, 200);
    });

    const openModal = () => {
      modal.classList.add('modal_opened');
    };

    function tgtrimm(str) {
      var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ');
      return ars;
    }

    profileNavBtn.addEventListener('click', e => {
      const nav = e.target.classList.contains('profile__nav');
      const name = tgtrimm(e.target.closest('.profile').querySelector('.profile__info-name-js').textContent);
      const popupGirlName = modal.querySelector('.modal__invite-name-js');
      popupGirlName.textContent = name;
      const classes = e.target.closest('.profile__btn');
      const activeAnim = document.querySelector('.modal__anim_active');
      activeAnim && activeAnim.classList.remove('modal__anim_active');

      if (classes.classList.contains('profile__btn-wine-js')) {
        document.querySelector('.modal__anim-wine').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to drink wine';
      }

      if (classes.classList.contains('profile__btn-coffee-js')) {
        document.querySelector('.modal__anim-cup').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'for coffee';
      }

      if (classes.classList.contains('profile__btn-film-js')) {
        document.querySelector('.modal__anim-film').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to the cinema';
      }

      if (classes.classList.contains('profile__btn-flower-js')) {
        document.querySelector('.modal__anim-flower').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to a date';
      }

      if (classes.classList.contains('profile__btn-pizza-js')) {
        document.querySelector('.modal__anim-pizza').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to eat pizza';
      }

      if (classes.classList.contains('profile__btn-dinner-js')) {
        document.querySelector('.modal__anim-dinner').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to dinner';
      }

      if (classes.classList.contains('profile__btn-star-js')) {
        document.querySelector('.modal__anim-star').classList.add('modal__anim_active');
        document.querySelector('.modal__invite-js').textContent = 'to a date';
      }

      if (!nav) {
        openModal();
      }
    });
    buttonUnlock.addEventListener('click', () => {
      document.querySelector('.main').classList.add('main_hidden'); // document.querySelector('.footer').style.position = 'unset';

      setTimeout(() => {
        formActive = false;
      }, 500);
    });
    const girls = [{
      id: 1,
      info: 'Gloria, 28',
      millies: '13',
      preview: ['./img/content/gloria_prev-1.jpg', './img/content/gloria_prev-2.jpg', './img/content/gloria_prev-3.jpg'],
      header: './img/content/gloria_header.jpg',
      avatar: './img/content/gloria_avatar.jpg',
      photo: ['./img/content/gloria_big-1.jpg', './img/content/gloria_big-2.jpg', './img/content/gloria_big-3.jpg', './img/content/gloria_big-4.jpg', './img/content/gloria_big-5.jpg', './img/content/gloria_big-6.jpg']
    }, {
      id: 2,
      info: 'Julie, 23',
      millies: '20',
      preview: ['./img/content/julie_prev-1.jpg', './img/content/julie_prev-2.jpg', './img/content/julie_prev-3.jpg', './img/content/julie_prev-4.jpg'],
      header: './img/content/julie_header.jpg',
      avatar: './img/content/julie_avatar.jpg',
      photo: ['./img/content/julie_1.jpg', './img/content/julie_2.jpg', './img/content/julie_3.jpg', './img/content/julie_4.jpg', './img/content/julie_5.jpg', './img/content/julie_6.jpg', './img/content/julie_7.jpg', './img/content/julie_8.jpg']
    }, {
      id: 3,
      info: 'Irma, 29',
      millies: '15',
      preview: ['./img/content/irma_prev-1.jpg', './img/content/irma_prev-2.jpg', './img/content/irma_prev-3.jpg'],
      header: './img/content/irma_header.jpg',
      avatar: './img/content/irma_avatar.jpg',
      photo: ['./img/content/irma_1.jpg', './img/content/irma_2.jpg', './img/content/irma_3.jpg', './img/content/irma_4.jpg']
    }, {
      id: 4,
      info: 'Claire, 30',
      millies: '36',
      preview: ['./img/content/claire_prev-1.jpg', './img/content/claire_prev-2.jpg', './img/content/claire_prev-3.jpg', './img/content/claire_prev-4.jpg'],
      header: './img/content/claire_header.jpg',
      avatar: './img/content/claire_avatar.jpg',
      photo: ['./img/content/claire_1.jpg', './img/content/claire_2.jpg', './img/content/claire_3.jpg', './img/content/claire_4.jpg', './img/content/claire_5.jpg', './img/content/claire_6.jpg']
    }, {
      id: 5,
      info: 'Darlene, 19',
      millies: '26',
      preview: ['./img/content/darlene_prev-1.jpg', './img/content/darlene_prev-2.jpg', './img/content/darlene_prev-3.jpg'],
      header: './img/content/darlene_header.jpg',
      avatar: './img/content/darlene_avatar.jpg',
      photo: ['./img/content/darlene_1.jpg', './img/content/darlene_2.jpg', './img/content/darlene_3.jpg', './img/content/darlene_4.jpg', './img/content/darlene_5.jpg']
    }, {
      id: 6,
      info: 'Connie, 32',
      millies: '34',
      preview: ['./img/content/connie_prev-1.jpg', './img/content/connie_prev-2.jpg', './img/content/connie_prev-3.jpg'],
      header: './img/content/connie_header.jpg',
      avatar: './img/content/connie_avatar.jpg',
      photo: ['./img/content/connie_1.jpg', './img/content/connie_2.jpg', './img/content/connie_3.jpg']
    }, {
      id: 7,
      info: 'Jane, 35',
      millies: '8',
      preview: ['./img/content/jane_prev-1.jpg', './img/content/jane_prev-2.jpg', './img/content/jane_prev-3.jpg'],
      header: './img/content/jane_header.jpg',
      avatar: './img/content/jane_avatar.jpg',
      photo: ['./img/content/jane_1.jpg', './img/content/jane_2.jpg', './img/content/jane_3.jpg', './img/content/jane_4.jpg']
    }, {
      id: 8,
      info: 'Regina, 27',
      millies: '8',
      preview: ['./img/content/regina_prev-1.jpg', './img/content/regina_prev-2.jpg', './img/content/regina_prev-3.jpg'],
      header: './img/content/regina_header.jpg',
      avatar: './img/content/regina_avatar.jpg',
      photo: ['./img/content/regina_1.jpg', './img/content/regina_2.jpg', './img/content/regina_3.jpg', './img/content/regina_4.jpg']
    }, {
      id: 9,
      info: 'Kathryn, 23',
      millies: '10',
      preview: ['./img/content/kathryn_prev-1.jpg', './img/content/kathryn_prev-2.jpg', './img/content/kathryn_prev-3.jpg', './img/content/kathryn_prev-4.jpg'],
      header: './img/content/kathryn_header.jpg',
      avatar: './img/content/kathryn_avatar.jpg',
      photo: ['./img/content/kathryn_1.jpg', './img/content/kathryn_2.jpg', './img/content/kathryn_3.jpg', './img/content/kathryn_4.jpg', './img/content/kathryn_5.jpg', './img/content/kathryn_6.jpg', './img/content/kathryn_7.jpg', './img/content/kathryn_8.jpg']
    }, {
      id: 10,
      info: 'Tanya, 26',
      millies: '26',
      preview: ['./img/content/tanya_prev-1.jpg', './img/content/tanya_prev-2.jpg', './img/content/tanya_prev-3.jpg'],
      header: './img/content/tanya_header.jpg',
      avatar: './img/content/tanya_avatar.jpg',
      photo: ['./img/content/tanya_1.jpg', './img/content/tanya_2.jpg', './img/content/tanya_3.jpg', './img/content/tanya_4.jpg', './img/content/tanya_5.jpg', './img/content/tanya_6.jpg', './img/content/tanya_7.jpg', './img/content/tanya_8.jpg']
    }, {
      id: 11,
      info: 'Kristin, 21',
      millies: '37',
      preview: ['./img/content/kristin_prev-1.jpg', './img/content/kristin_prev-2.jpg', './img/content/kristin_prev-3.jpg', './img/content/kristin_prev-4.jpg'],
      header: './img/content/kristin_header.jpg',
      avatar: './img/content/kristin_avatar.jpg',
      photo: ['./img/content/kristin_1.jpg', './img/content/kristin_2.jpg', './img/content/kristin_3.jpg', './img/content/kristin_4.jpg', './img/content/kristin_5.jpg', './img/content/kristin_6.jpg', './img/content/kristin_7.jpg']
    }, {
      id: 12,
      info: 'Lily, 29',
      millies: '31',
      preview: ['./img/content/lily_prev-1.jpg', './img/content/lily_prev-2.jpg', './img/content/lily_prev-3.jpg'],
      header: './img/content/lily_header.jpg',
      avatar: './img/content/lily_avatar.jpg',
      photo: ['./img/content/lily_1.jpg', './img/content/lily_2.jpg', './img/content/lily_3.jpg', './img/content/lily_4.jpg', './img/content/lily_5.jpg', './img/content/lily_6.jpg']
    }, {
      id: 13,
      info: 'Aiko, 24',
      millies: '45',
      preview: ['./img/content/aiko_prev-1.jpg', './img/content/aiko_prev-2.jpg', './img/content/aiko_prev-3.jpg'],
      header: './img/content/aiko_header.jpg',
      avatar: './img/content/aiko_avatar.jpg',
      photo: ['./img/content/aiko_1.jpg', './img/content/aiko_2.jpg', './img/content/aiko_3.jpg', './img/content/aiko_4.jpg', './img/content/aiko_5.jpg', './img/content/aiko_6.jpg']
    }, {
      id: 14,
      info: 'Hana, 25',
      millies: '16',
      preview: ['./img/content/hana_prev-1.jpg', './img/content/hana_prev-2.jpg', './img/content/hana_prev-3.jpg'],
      header: './img/content/hana_header.jpg',
      avatar: './img/content/hana_avatar.jpg',
      photo: ['./img/content/hana_1.jpg', './img/content/hana_2.jpg', './img/content/hana_3.jpg', './img/content/hana_4.jpg', './img/content/hana_5.jpg']
    }, {
      id: 15,
      info: 'Miki, 29',
      millies: '14',
      preview: ['./img/content/miki_prev-1.jpg', './img/content/miki_prev-2.jpg', './img/content/miki_prev-3.jpg', './img/content/miki_prev-4.jpg'],
      header: './img/content/miki_header.jpg',
      avatar: './img/content/miki_avatar.jpg',
      photo: ['./img/content/miki_1.jpg', './img/content/miki_2.jpg', './img/content/miki_3.jpg', './img/content/miki_4.jpg', './img/content/miki_5.jpg', './img/content/miki_6.jpg', './img/content/miki_7.jpg']
    }, {
      id: 16,
      info: 'Lian, 33',
      millies: '20',
      preview: ['./img/content/lian_prev-1.jpg', './img/content/lian_prev-2.jpg', './img/content/lian_prev-3.jpg'],
      header: './img/content/lian_header.jpg',
      avatar: './img/content/lian_avatar.jpg',
      photo: ['./img/content/lian_1.jpg', './img/content/lian_2.jpg', './img/content/lian_3.jpg', './img/content/lian_4.jpg', './img/content/lian_5.jpg']
    }, {
      id: 17,
      info: 'Ame, 18',
      millies: '14',
      preview: ['./img/content/ame_prev-1.jpg', './img/content/ame_prev-2.jpg', './img/content/ame_prev-3.jpg', './img/content/ame_prev-4.jpg'],
      header: './img/content/ame_header.jpg',
      avatar: './img/content/ame_avatar.jpg',
      photo: ['./img/content/ame_1.jpg', './img/content/ame_2.jpg', './img/content/ame_3.jpg', './img/content/ame_4.jpg', './img/content/ame_5.jpg', './img/content/ame_6.jpg', './img/content/ame_7.jpg']
    }, {
      id: 18,
      info: 'Ishi, 27',
      millies: '57',
      preview: ['./img/content/ishi_prev-1.jpg', './img/content/ishi_prev-2.jpg', './img/content/ishi_prev-3.jpg'],
      header: './img/content/ishi_header.jpg',
      avatar: './img/content/ishi_avatar.jpg',
      photo: ['./img/content/ishi_1.jpg', './img/content/ishi_2.jpg', './img/content/ishi_3.jpg', './img/content/ishi_4.jpg', './img/content/ishi_5.jpg']
    }, {
      id: 19,
      info: 'Mali, 35',
      millies: '29',
      preview: ['./img/content/mali_prev-1.jpg', './img/content/mali_prev-2.jpg', './img/content/mali_prev-3.jpg'],
      header: './img/content/mali_header.jpg',
      avatar: './img/content/mali_avatar.jpg',
      photo: ['./img/content/mali_1.jpg', './img/content/mali_2.jpg', './img/content/mali_3.jpg', './img/content/mali_4.jpg', './img/content/mali_5.jpg']
    }, {
      id: 20,
      info: 'Kimi, 26',
      millies: '15',
      preview: ['./img/content/kimi_prev-1.jpg', './img/content/kimi_prev-2.jpg', './img/content/kimi_prev-3.jpg'],
      header: './img/content/kimi_header.jpg',
      avatar: './img/content/kimi_avatar.jpg',
      photo: ['./img/content/kimi_1.jpg', './img/content/kimi_2.jpg', './img/content/kimi_3.jpg', './img/content/kimi_4.jpg', './img/content/kimi_5.jpg', './img/content/kimi_6.jpg']
    }, {
      id: 21,
      info: 'Tora, 18',
      millies: '13',
      preview: ['./img/content/tora_prev-1.jpg', './img/content/tora_prev-2.jpg', './img/content/tora_prev-3.jpg'],
      header: './img/content/tora_header.jpg',
      avatar: './img/content/tora_avatar.jpg',
      photo: ['./img/content/tora_1.jpg', './img/content/tora_2.jpg', './img/content/tora_3.jpg', './img/content/tora_4.jpg']
    }, {
      id: 22,
      info: 'Xia, 28',
      millies: '17',
      preview: ['./img/content/xia_prev-1.jpg', './img/content/xia_prev-2.jpg', './img/content/xia_prev-3.jpg'],
      header: './img/content/xia_header.jpg',
      avatar: './img/content/xia_avatar.jpg',
      photo: ['./img/content/xia_1.jpg', './img/content/xia_2.jpg', './img/content/xia_3.jpg', './img/content/xia_4.jpg']
    }, {
      id: 23,
      info: 'Yeva, 32',
      millies: '58',
      preview: ['./img/content/yeva_prev-1.jpg', './img/content/yeva_prev-2.jpg', './img/content/yeva_prev-3.jpg'],
      header: './img/content/yeva_header.jpg',
      avatar: './img/content/yeva_avatar.jpg',
      photo: ['./img/content/yeva_1.jpg', './img/content/yeva_2.jpg', './img/content/yeva_3.jpg', './img/content/yeva_4.jpg']
    }, {
      id: 24,
      info: 'Erika, 22',
      millies: '37',
      preview: ['./img/content/erika_prev-1.jpg', './img/content/erika_prev-2.jpg', './img/content/erika_prev-3.jpg'],
      header: './img/content/erika_header.jpg',
      avatar: './img/content/erika_avatar.jpg',
      photo: ['./img/content/erika_1.jpg', './img/content/erika_2.jpg', './img/content/erika_3.jpg', './img/content/erika_4.jpg']
    }, {
      id: 25,
      info: 'Hitomi,25',
      millies: '37',
      preview: ['./img/content/hitomi_prev-1.jpg', './img/content/hitomi_prev-2.jpg', './img/content/hitomi_prev-3.jpg'],
      header: './img/content/hitomi_header.jpg',
      avatar: './img/content/hitomi_avatar.jpg',
      photo: ['./img/content/hitomi_1.jpg', './img/content/hitomi_2.jpg', './img/content/hitomi_3.jpg', './img/content/hitomi_4.jpg']
    }, {
      id: 26,
      info: 'Adya, 21',
      millies: '9',
      preview: ['./img/content/adya_prev-1.jpg', './img/content/adya_prev-2.jpg', './img/content/adya_prev-3.jpg'],
      header: './img/content/adya_header.jpg',
      avatar: './img/content/adya_avatar.jpg',
      photo: ['./img/content/adya_1.jpg', './img/content/adya_2.jpg', './img/content/adya_3.jpg', './img/content/adya_4.jpg']
    }, {
      id: 27,
      info: 'Kiara, 25',
      millies: '25',
      preview: ['./img/content/kiara_prev-1.jpg', './img/content/kiara_prev-2.jpg', './img/content/kiara_prev-3.jpg'],
      header: './img/content/kiara_header.jpg',
      avatar: './img/content/kiara_avatar.jpg',
      photo: ['./img/content/kiara_1.jpg', './img/content/kiara_2.jpg', './img/content/kiara_3.jpg', './img/content/kiara_4.jpg']
    }, {
      id: 28,
      info: 'Alina, 35',
      millies: '14',
      preview: ['./img/content/alina_prev-1.jpg', './img/content/alina_prev-2.jpg', './img/content/alina_prev-3.jpg'],
      header: './img/content/alina_header.jpg',
      avatar: './img/content/alina_avatar.jpg',
      photo: ['./img/content/alina_1.jpg', './img/content/alina_2.jpg', './img/content/alina_3.jpg']
    }, {
      id: 29,
      info: 'Kaori, 37',
      millies: '28',
      preview: ['./img/content/kaori_prev-1.jpg', './img/content/kaori_prev-2.jpg', './img/content/kaori_prev-3.jpg'],
      header: './img/content/kaori_header.jpg',
      avatar: './img/content/kaori_avatar.jpg',
      photo: ['./img/content/kaori_1.jpg', './img/content/kaori_2.jpg', './img/content/kaori_3.jpg']
    }, {
      id: 30,
      info: 'Amber, 26',
      millies: '13',
      preview: ['./img/content/amber_prev-1.jpg', './img/content/amber_prev-2.jpg', './img/content/amber_prev-3.jpg'],
      header: './img/content/amber_header.jpg',
      avatar: './img/content/amber_avatar.jpg',
      photo: ['./img/content/amber_1.jpg', './img/content/amber_2.jpg', './img/content/amber_3.jpg']
    }, {
      id: 31,
      info: 'Jasmine, 26',
      millies: '19',
      preview: ['./img/content/jasmine_prev-1.jpg', './img/content/jasmine_prev-2.jpg', './img/content/jasmine_prev-3.jpg'],
      header: './img/content/jasmine_header.jpg',
      avatar: './img/content/jasmine_avatar.jpg',
      photo: ['./img/content/jasmine_1.jpg', './img/content/jasmine_2.jpg', './img/content/jasmine_3.jpg', './img/content/jasmine_4.jpg', './img/content/jasmine_5.jpg', './img/content/jasmine_6.jpg']
    }, {
      id: 32,
      info: 'Tara, 22',
      millies: '33',
      preview: ['./img/content/tara_prev-1.jpg', './img/content/tara_prev-2.jpg', './img/content/tara_prev-3.jpg'],
      header: './img/content/tara_header.jpg',
      avatar: './img/content/tara_avatar.jpg',
      photo: ['./img/content/tara_1.jpg', './img/content/tara_2.jpg', './img/content/tara_3.jpg', './img/content/tara_4.jpg', './img/content/tara_5.jpg', './img/content/tara_6.jpg']
    }, {
      id: 33,
      info: 'Shima, 21',
      millies: '29',
      preview: ['./img/content/shima_prev-1.jpg', './img/content/shima_prev-2.jpg', './img/content/shima_prev-3.jpg'],
      header: './img/content/shima_header.jpg',
      avatar: './img/content/shima_avatar.jpg',
      photo: ['./img/content/shima_1.jpg', './img/content/shima_2.jpg', './img/content/shima_3.jpg', './img/content/shima_4.jpg', './img/content/shima_5.jpg']
    }, {
      id: 34,
      info: 'May, 24',
      millies: '39',
      preview: ['./img/content/may_prev-1.jpg', './img/content/may_prev-2.jpg', './img/content/may_prev-3.jpg'],
      header: './img/content/may_header.jpg',
      avatar: './img/content/may_avatar.jpg',
      photo: ['./img/content/may_1.jpg', './img/content/may_2.jpg', './img/content/may_3.jpg']
    }, {
      id: 35,
      info: 'Tenshi, 29',
      millies: '17',
      preview: ['./img/content/tenshi_prev-1.jpg', './img/content/tenshi_prev-2.jpg', './img/content/tenshi_prev-3.jpg'],
      header: './img/content/tenshi_header.jpg',
      avatar: './img/content/tenshi_avatar.jpg',
      photo: ['./img/content/tenshi_1.jpg', './img/content/tenshi_2.jpg', './img/content/tenshi_3.jpg']
    }, {
      id: 36,
      info: 'Ananda, 29',
      millies: '30',
      preview: ['./img/content/ananda_prev-1.jpg', './img/content/ananda_prev-2.jpg', './img/content/ananda_prev-3.jpg'],
      header: './img/content/ananda_header.jpg',
      avatar: './img/content/ananda_avatar.jpg',
      photo: ['./img/content/ananda_1.jpg', './img/content/ananda_2.jpg', './img/content/ananda_3.jpg', './img/content/ananda_4.jpg', './img/content/ananda_5.jpg', './img/content/ananda_6.jpg']
    }, {
      id: 37,
      info: 'Rico, 22',
      millies: '41',
      preview: ['./img/content/rico_prev-1.jpg', './img/content/rico_prev-2.jpg', './img/content/rico_prev-3.jpg'],
      header: './img/content/rico_header.jpg',
      avatar: './img/content/rico_avatar.jpg',
      photo: ['./img/content/rico_1.jpg', './img/content/rico_2.jpg', './img/content/rico_3.jpg']
    }, {
      id: 38,
      info: 'Dewi, 30',
      millies: '18',
      preview: ['./img/content/dewi_prev-1.jpg', './img/content/dewi_prev-2.jpg', './img/content/dewi_prev-3.jpg'],
      header: './img/content/dewi_header.jpg',
      avatar: './img/content/dewi_avatar.jpg',
      photo: ['./img/content/dewi_1.jpg', './img/content/dewi_2.jpg', './img/content/dewi_3.jpg', './img/content/dewi_4.jpg', './img/content/dewi_5.jpg', './img/content/dewi_6.jpg']
    }, {
      id: 39,
      info: 'Tamar, 32',
      millies: '16',
      preview: ['./img/content/tamar_prev-1.jpg', './img/content/tamar_prev-2.jpg', './img/content/tamar_prev-3.jpg'],
      header: './img/content/tamar_header.jpg',
      avatar: './img/content/tamar_avatar.jpg',
      photo: ['./img/content/tamar_1.jpg', './img/content/tamar_2.jpg', './img/content/tamar_3.jpg', './img/content/tamar_4.jpg', './img/content/tamar_5.jpg', './img/content/tamar_6.jpg']
    }, {
      id: 40,
      info: 'Chai, 25',
      millies: '11',
      preview: ['./img/content/chai_prev-1.jpg', './img/content/chai_prev-2.jpg', './img/content/chai_prev-3.jpg'],
      header: './img/content/chai_header.jpg',
      avatar: './img/content/chai_avatar.jpg',
      photo: ['./img/content/chai_1.jpg', './img/content/chai_2.jpg', './img/content/chai_3.jpg']
    }, {
      id: 41,
      info: 'Evelyn, 29',
      millies: '50',
      preview: ['./img/content/evelyn_prev-1.jpg', './img/content/evelyn_prev-2.jpg', './img/content/evelyn_prev-3.jpg'],
      header: './img/content/evelyn_header.jpg',
      avatar: './img/content/evelyn_avatar.jpg',
      photo: ['./img/content/evelyn_1.jpg', './img/content/evelyn_2.jpg', './img/content/evelyn_3.jpg', './img/content/evelyn_4.jpg']
    }, {
      id: 42,
      info: 'Wening, 29',
      millies: '38',
      preview: ['./img/content/wening_prev-1.jpg', './img/content/wening_prev-2.jpg', './img/content/wening_prev-3.jpg'],
      header: './img/content/wening_header.jpg',
      avatar: './img/content/wening_avatar.jpg',
      photo: ['./img/content/wening_1.jpg', './img/content/wening_2.jpg', './img/content/wening_3.jpg', './img/content/wening_4.jpg', './img/content/wening_5.jpg', './img/content/wening_6.jpg']
    }, {
      id: 43,
      info: 'Veronique, 32',
      millies: '48',
      preview: ['./img/content/veronique_prev-1.jpg', './img/content/veronique_prev-2.jpg', './img/content/veronique_prev-3.jpg'],
      header: './img/content/veronique_header.jpg',
      avatar: './img/content/veronique_avatar.jpg',
      photo: ['./img/content/veronique_1.jpg', './img/content/veronique_2.jpg', './img/content/veronique_3.jpg', './img/content/veronique_4.jpg']
    }, {
      id: 44,
      info: 'Shaun, 24',
      millies: '28',
      preview: ['./img/content/shaun_prev-1.jpg', './img/content/shaun_prev-2.jpg', './img/content/shaun_prev-3.jpg'],
      header: './img/content/shaun_header.jpg',
      avatar: './img/content/shaun_avatar.jpg',
      photo: ['./img/content/shaun_1.jpg', './img/content/shaun_2.jpg', './img/content/shaun_3.jpg', './img/content/shaun_4.jpg', './img/content/shaun_5.jpg', './img/content/shaun_6.jpg']
    }, {
      id: 45,
      info: 'Ika, 35',
      millies: '27',
      preview: ['./img/content/ika_prev-1.jpg', './img/content/ika_prev-2.jpg', './img/content/ika_prev-3.jpg'],
      header: './img/content/ika_header.jpg',
      avatar: './img/content/ika_avatar.jpg',
      photo: ['./img/content/ika_1.jpg', './img/content/ika_2.jpg', './img/content/ika_3.jpg', './img/content/ika_4.jpg', './img/content/ika_5.jpg', './img/content/ika_6.jpg']
    }, {
      id: 46,
      info: 'Tate, 37',
      millies: '12',
      preview: ['./img/content/tate_prev-1.jpg', './img/content/tate_prev-2.jpg', './img/content/tate_prev-3.jpg'],
      header: './img/content/tate_header.jpg',
      avatar: './img/content/tate_avatar.jpg',
      photo: ['./img/content/tate_1.jpg', './img/content/tate_2.jpg', './img/content/tate_3.jpg', './img/content/tate_4.jpg', './img/content/tate_5.jpg']
    }, {
      id: 47,
      info: 'Reyna, 29',
      millies: '36',
      preview: ['./img/content/reyna_prev-1.jpg', './img/content/reyna_prev-2.jpg', './img/content/reyna_prev-3.jpg'],
      header: './img/content/reyna_header.jpg',
      avatar: './img/content/reyna_avatar.jpg',
      photo: ['./img/content/reyna_1.jpg', './img/content/reyna_2.jpg', './img/content/reyna_3.jpg', './img/content/reyna_4.jpg']
    }, {
      id: 48,
      info: 'Tansanee, 25',
      millies: '47',
      preview: ['./img/content/tansanee_prev-1.jpg', './img/content/tansanee_prev-2.jpg', './img/content/tansanee_prev-3.jpg'],
      header: './img/content/tansanee_header.jpg',
      avatar: './img/content/tansanee_avatar.jpg',
      photo: ['./img/content/tansanee_1.jpg', './img/content/tansanee_2.jpg', './img/content/tansanee_3.jpg', './img/content/tansanee_4.jpg', './img/content/tansanee_5.jpg', './img/content/tansanee_6.jpg']
    }, {
      id: 49,
      info: 'Yukio, 26',
      millies: '19',
      preview: ['./img/content/yukio_prev-1.jpg', './img/content/yukio_prev-2.jpg', './img/content/yukio_prev-3.jpg'],
      header: './img/content/yukio_header.jpg',
      avatar: './img/content/yukio_avatar.jpg',
      photo: ['./img/content/yukio_1.jpg', './img/content/yukio_2.jpg', './img/content/yukio_3.jpg', './img/content/yukio_4.jpg']
    }, {
      id: 50,
      info: 'Yoshe, 27',
      millies: '29',
      preview: ['./img/content/yoshe_prev-1.jpg', './img/content/yoshe_prev-2.jpg', './img/content/yoshe_prev-3.jpg'],
      header: './img/content/yoshe_header.jpg',
      avatar: './img/content/yoshe_avatar.jpg',
      photo: ['./img/content/yoshe_1.jpg', './img/content/yoshe_2.jpg', './img/content/yoshe_3.jpg', './img/content/yoshe_4.jpg', './img/content/yoshe_5.jpg', './img/content/yoshe_6.jpg']
    }];

    function shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }

      return sourceArray;
    }

    const girlsRandom = shuffle(girls);
    const containerGirl = document.querySelector('.catalog__list-js');
    containerGirl.addEventListener('click', e => {
      const girlId = e.target.closest('.catalog__item-js').dataset.id;
      catalogContainer.classList.add('catalog__main-container_hidden');
      profileLogo.classList.add('catalog__logo_hidden');
      const header = document.querySelector('.profile__header-js');
      const avatar = document.querySelector('.profile__avatar-js');
      const distance = document.querySelector('.profile__info-distance-js');
      const name = document.querySelector('.profile__info-name-js');
      const photosContainer = document.querySelector('.profile__gallery-js');
      const girl = girls.find(g => {
        if (g.id == girlId) return g;
      });
      name.textContent = girl.info || '';
      distance.textContent = girl.millies || '';
      header.src = girl.header || '';
      header.alt = girl.info || '';
      avatar.src = girl.avatar || '';
      avatar.alt = girl.info || '';

      if (girl.photo.length === 6) {
        photosContainer.classList.add('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template5');
        photosContainer.classList.remove('profile__gallery_template6');
      }

      if (girl.photo.length === 8) {
        photosContainer.classList.add('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template5');
        photosContainer.classList.remove('profile__gallery_template6');
      }

      if (girl.photo.length === 4) {
        photosContainer.classList.add('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template5');
        photosContainer.classList.remove('profile__gallery_template6');
      }

      if (girl.photo.length === 5) {
        photosContainer.classList.add('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template5');
        photosContainer.classList.remove('profile__gallery_template6');
      }

      if (girl.photo.length === 3) {
        photosContainer.classList.add('profile__gallery_template5');
        photosContainer.classList.remove('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template6');
      }

      if (girl.photo.length === 7) {
        photosContainer.classList.add('profile__gallery_template6');
        photosContainer.classList.remove('profile__gallery_template3');
        photosContainer.classList.remove('profile__gallery_template1');
        photosContainer.classList.remove('profile__gallery_template2');
        photosContainer.classList.remove('profile__gallery_template4');
        photosContainer.classList.remove('profile__gallery_template5');
      }

      girl.photo.forEach(photo => {
        let img = document.createElement('img');
        img.src = photo;
        img.alt = girl.info;
        photosContainer.append(img);
      });
      setTimeout(() => profile.classList.add('profile_active'), 0);
      document.querySelector('.profile__header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
    girlsRandom.forEach((girl, idx) => {
      if (idx > 11) return;
      const photosPreview = girl.preview;
      let girlTemplate = document.querySelector('#girl');
      let element = girlTemplate.content.cloneNode(true);
      element.querySelector('.catalog__item-js').dataset.id = girl.id;
      element.querySelector('.catalog__girl-info-js').textContent = girl.info;
      element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? 'catalog__image-container_three' : 'catalog__image-container_four');
      let count;

      switch (girl.photo.length) {
        case 3:
          count = 3;
          break;

        case 4:
          count = 4;
          break;

        case 5:
          count = 5;
          break;

        case 6:
          count = 6;
          break;

        case 7:
          count = 7;
          break;

        case 8:
          count = 8;
          break;
      }

      element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? `catalog__image-container_three-count-${count}` : `catalog__image-container_four-count-${count}`); // element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? 'catalog__image-container_three' : 'catalog__image-container_four');

      photosPreview.forEach((photo, idx) => {
        let div = document.createElement('div');
        div.classList.add('catalog__image');
        let image = document.createElement('img');
        image.src = photo;
        image.alt = girl.info;
        div.append(image);
        element.querySelector('.catalog__image-container-js').append(div);
      });
      containerGirl.append(element);
    });
    const catalog = document.querySelector('.catalog'); // catalog.addEventListener('scroll', () => {
    //     let isCatalog = catalogContainer.classList.contains('catalog__main-container_hidden');
    //     console.log(containerGirl.scrollHeight);
    //     let heightContainer = containerGirl.scrollHeight - 600;
    //     if(catalog.scrollTop > heightContainer && !formActive && !isCatalog) {
    //         console.log('scroll');
    //         formActive = true;
    //         catalog.querySelector('.catalog__loader').classList.add('catalog__loader_active');
    //         setTimeout(() => {
    //             catalog.querySelector('.catalog__loader').classList.remove('catalog__loader_active');
    //             setTimeout(() => {
    //                 catalog.querySelector('.catalog__form').style.display = 'flex';
    //                 setTimeout(() => {
    //                     catalog.querySelector('.catalog__form').classList.add('catalog__form_active');
    //                     document.querySelector('[data-id="register"]').scrollIntoView({
    //                         behavior: 'smooth',
    //                         block: 'start'
    //                     });
    //                 }, 1000);
    //             }, 1000);
    //         }, 4000);
    //     };
    // })

    const option = {
      root: document.querySelector('#viewport'),
      rootMargin: '0px',
      threshold: [0, 0.5]
    };
    const observer = new IntersectionObserver((entries, observer) => {
      if (document.querySelector('.main_hidden') && !formActive) {
        catalogContainer.classList.contains('catalog__main-container_hidden');
        formActive = true;
        catalog.querySelector('.catalog__loader').classList.add('catalog__loader_active');
        setTimeout(() => {
          catalog.querySelector('.catalog__loader').classList.remove('catalog__loader_active');
          setTimeout(() => {
            catalog.querySelector('.catalog__loader').remove();
            catalog.querySelector('.catalog__form').style.display = 'flex';
            setTimeout(() => {
              catalog.querySelector('.catalog__form').classList.add('catalog__form_active');
              document.querySelector('[data-id="register"]').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }, 1000);
          }, 1000);
        }, 4000);
      }
    }, option);
    const obs = document.querySelector('.footer');
    observer.observe(obs);

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', appHeight);
    appHeight();

}));

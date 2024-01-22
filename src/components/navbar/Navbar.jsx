import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className="container">
        <div className="nav_container">
          <div class="logo">
              <img src="./image/logo.jpg" alt="" />
          </div>
          <form action="">
              <button>
                  <i class="fa-solid fa-bars"></i>
                  Категории
              </button>
              <div class="forma">
                  <input type="text" placeholder='Поиск...'/>
                  <button>Искать</button>
              </div>
          </form>
          <ul>
            <li>
                <div class="img">
                    <i class="fa-regular fa-credit-card"></i>
                </div>
                <a href="#">Оплатить</a>
            </li>
            <li>
                <div class="img">
                    <i class="fa-solid fa-truck-fast"></i>
                </div>
                <a href="#">Отследить</a>
            </li>
            <li>
                <div class="img">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="text">0</span>
                </div>
                <a href="#">All product</a>
            </li>
            <li>
                <div class="img">
                    <i class="fa-regular fa-heart"></i>
                    <span>0</span>
                </div>
                <a href="#">Избранное</a>
            </li>
            <li>
                <div class="img">
                    <img src="./image/3.jpg" alt="" />
                </div>
                <a href="#">O'zbekcha</a>
            </li>
            <li>
                <div class="img">
                    <i class="fa-regular fa-user"></i>
                </div>
                <a href="#">Войты</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container">
        <ul class="nav2_container">
            <li><a href="">Скидки</a></li>
            <li><a href="">Спорт товары</a></li>
            <li><a href="">Новинки</a></li>
            <li><a href="">Книги</a></li>
            <li><a href="">Телефоны и гаджеты</a></li>
            <li><a href="">Ноутбуки</a></li>
            <li><a href="">Бытовая техника</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
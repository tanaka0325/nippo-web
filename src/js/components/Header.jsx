import React from 'react';

const Header = () =>
  <section className="hero is-dark is-medium">
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item site-title">
              nippo
            </a>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              <i className="fa fa-search" />
              検索
            </a>
            <a className="nav-item">
              <i className="fa fa-user-plus" />
              登録
            </a>
            <a className="nav-item">
              <i className="fa fa-sign-in" />
              ログイン
            </a>
          </div>
        </div>
      </header>
    </div>
  </section>;

export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

function LeftMenu(props) {
  const [menus, setMenus] = useState(getMenus());

  function getMenus() {
    return configs.menus.map((menu) => {
      menu.active = false;
      menu.menuItems = menu.menuItems.map((menuItem) => {
        menuItem.active = false;
        return menuItem
      });
      return menu;
    });
  }

  useEffect(() => {
    handleMenuItemClick(props.pathName);
  }, [props.pathName]);

  function handleMenuItemClick(pathName) {
    let menus = getMenus();
    menus.forEach((menu) => {
      menu.menuItems.forEach((menuItem) => {
        menuItem.active = menuItem.menuRoute === pathName ? true : false;
      });
      menu.menuItems.forEach((item) => {
        if (item.active) {
          menu.active = true;
        }
      });
    });
    setMenus(menus);
  }

  return (<Wrapper id="sidebar">
    <div className="panel-group" id="accordion" role="tablist">
      {menus.map((menu, index) => {
        return (
          <div key={index} className="panel panel-default">
            <div className="panel-heading" role="tab" id={menu.menuId}>
              <h4 className="panel-title">
                <a className={!menu.active ? 'collapsed' : ''} data-toggle="collapse" data-parent="#accordion" href={'#' + menu.menuHref} aria-expanded="true" aria-controls={menu.menuHref}>{menu.menuValue}</a>
              </h4>
            </div>
            <div id={menu.menuHref} className={'panel-collapse collapse in' + (menu.active ? ' show' : '')} role="tabpanel" aria-labelledby={menu.menuId}>
              <div className="panel-body">
                {menu.menuItems.map((menuItem, i) => {
                  return (
                    <Link key={i} className={menuItem.active ? 'active' : ''} to={menuItem.menuRoute}>{menuItem.menuValue}</Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Wrapper>);
}

export default LeftMenu;

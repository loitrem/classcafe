import React from 'react'
import styles from './MenuList.module.css';
import MenuListItem from '../MenuListItem/MenuListItem';

function MenuList({ menuItems, handleAddToOrder }) {
    const items = menuItems.map(item =>
        <MenuListItem
            key={item._id}
            handleAddToOrder={handleAddToOrder}
            menuItem={item}
            />
        );
        return (
            <main className={styles.MenuList}>
            {items}
            </main>
        );
    }

export default MenuList
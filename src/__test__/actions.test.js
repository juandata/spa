import { menuChange } from '../actions/menu-actions';

describe('Menu changed actions', () => {
  it('menuChange should create MENU_CHANGED action', () => {
    expect(menuChange('Menu was changed pal!')).toEqual({
      type: 'MENU_CHANGED',
      payload: 'Menu was changed pal!'
    })
  })
});

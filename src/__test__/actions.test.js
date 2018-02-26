import { menuChange } from '../actions/menu-actions';

describe('Menu changed actions', () => {
  it('menuChange should create MENU_CHANGED action', () => {
    expect(menuChange('Use Redux')).toEqual({
      type: 'MENU_CHANGED',
      payload: 'Use Redux'
    })
  })
});

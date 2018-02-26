import reducer from '../reducers/menus-reducer';

describe('menus reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      menu:''
    })
  })

  it('should handle MENU_CHANGED', () => {
    expect(
      reducer([], {
        type: 'MENU_CHANGED',
        payload: 'Menu item 1'
      })
    ).toEqual(
      {
        menu: 'Menu item 1'
      }
    )
})

})

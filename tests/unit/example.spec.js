describe('Example Component', ()=>{
  test( 'Debe de ser mayor a 10', ()=> {
    //arreglar
    let value = 10;

    //estímulo
    value = value +2;
    //aserción
expect(value).toBeGreaterThan(10)
  })
})

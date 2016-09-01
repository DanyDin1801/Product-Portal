describe('index', function() {
  it('should build a single product', function() {
    var product = {id:1, title:"", picture:"", price:""};
    var dom = buildProduct(product);
    expect(buildProduct(product).className).toBe('product');
  });
  it('should build a list of products', function() {
    var products = [{id:1, title:"", picture:"", price:""}];
    expect(buildProducts(products).className).toBe('products');
  });
});

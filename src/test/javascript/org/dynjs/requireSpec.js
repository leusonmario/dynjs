describe("CommonJS require()", function() {

  describe("load paths", function(){

    it("should have a pushLoadPath() function", function(){
      expect(typeof require.pushLoadPath).toBe('function');
      require.pushLoadPath('/foo/bar');
      expect(require.paths.get(0)).toBe('/foo/bar');
      expect(require.paths.size() > 1).toBe(true);
    });

  });

});


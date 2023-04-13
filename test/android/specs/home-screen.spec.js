describe('Access Home Screen', () => {
  it('check home screen title is displayed', async () => {
    // check home screen title using xPath
    const homeScreenTitle = await $('//*[@text="WEBDRIVER"]').getText();
    homeScreenTitle.should.equal('WEBDRIVER')
  });

  it('check home screen image is displayed', async () => {
    // check home page image using classname 
    const homeScreenImage = await $('.android.widget.ImageView')[0];
    console.log("THIS IS IMAGE: "+ homeScreenImage)
    expect(homeScreenImage).toBeDisplayed();
  })
})
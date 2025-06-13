    let solarSystem2 = new SolarSystem(xSolarSystemCenter = 900, ySolarSystemCenter = 1000);
    solarSystem2.drawCenter()

    me.planetIndex = 0; // Set planetIndex to 0 for TEST-GAME-AREA
    selectedPlanet = solarSystem.planets[me.planetIndex];
    let x = 1200 
    let y = 1000
    let fixedMinimap2 = new BasicMinimap(x, y, diameter = 200, color = 'grey', diameterPlanet = 2000);
    fixedMinimap2.simpleDraw()

    x = x + 250
    me.planetIndex = 1; // Set planetIndex to 0 for TEST-GAME-AREA
    selectedPlanet = solarSystem.planets[me.planetIndex];

    fixedMinimap2 = new BasicMinimap(x, y, diameter = 200, color = 'grey', diameterPlanet = 2000);
    fixedMinimap2.simpleDraw()
 
    x = x + 250
        me.planetIndex = 2; // Set planetIndex to 0 for TEST-GAME-AREA
    selectedPlanet = solarSystem.planets[me.planetIndex];

    fixedMinimap2 = new BasicMinimap(x, y, diameter = 200, color = 'grey', diameterPlanet = 2000);
    fixedMinimap2.simpleDraw()

    x = x + 250
        me.planetIndex = 3; // Set planetIndex to 0 for TEST-GAME-AREA
    selectedPlanet = solarSystem.planets[me.planetIndex];

    fixedMinimap2 = new BasicMinimap(x, y, diameter = 200, color = 'grey', diameterPlanet = 2000);
    fixedMinimap2.simpleDraw()

    x = x + 250
        me.planetIndex = 4; // Set planetIndex to 0 for TEST-GAME-AREA
    selectedPlanet = solarSystem.planets[me.planetIndex];

    fixedMinimap2 = new BasicMinimap(x, y, diameter = 200, color = 'grey', diameterPlanet = 2000);
    fixedMinimap2.simpleDraw()

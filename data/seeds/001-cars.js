exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "ABCDF55EXY9103575",
          make: "Tesla",
          model: "Elon-Musker",
          year: 2050,
          mileage: 110000,
          transmission: "manual",
          title: "clean"
        },
        {
          vin: "ZYXYRDED0CJ396612",
          make: "Delorian ",
          model: "THe-Doc",
          year: 1985,
          mileage: 110000,
          transmission: "auto",
          title: "salvage"
        },
        {
          vin: "WVGAV75N69W510474",
          make: "Volkswagen",
          model: "Tiguan",
          year: 2009,
          mileage: 110000,
          transmission: "manual",
          title: "clear"
        },
        {
          vin: "GRCDF55EXY9103575",
          make: "Hot-Dog",
          model: "Osker-Meyer",
          year: 2020,
          mileage: 11440000,
          transmission: "manual",
          title: "stolen"
        }
      ]);
    });
};

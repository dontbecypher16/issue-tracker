module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TestUsers",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "ghost@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mary",
          lastName: "Jane",
          email: "blunt@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jose",
          lastName: "Peso",
          email: "garcia@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TestUsers", null, {});
  },
};

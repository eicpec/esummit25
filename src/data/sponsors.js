export const sponsors = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `Speaker ${i + 1}`,
    designation: `Designation ${i + 1}`,
    image: `../assets/pastSpeakers/${i + 1}.jpg`, // Assuming images are named 1.jpg, 2.jpg, etc.
}));
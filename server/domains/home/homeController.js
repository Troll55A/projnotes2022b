// Creando los Actions Methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Express',
    author: 'Luis Andres',
  };
  // 2. Madamos a generar la vista con el Template Engine}
  res.render('home/home', viewModel);
};
const main = (req, res) => {
  res.render('home/main', {});
};
// Exportando el Controlador
export default { home, main };
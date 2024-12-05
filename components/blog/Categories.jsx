const categories = [
  { id: 1, text: "SEO (3)" },
  { id: 2, text: "Branding (6)" },
  { id: 3, text: "SEM (2)" },
  { id: 4, text: "Diseño Web (1)" },
  { id: 5, text: "Google (4)" },
  { id: 6, text: "eCommerce (1)" },
];
export default function Categories() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categorias</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categories.map((link) => (
            <li key={link.id}>
              <a href="#">{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

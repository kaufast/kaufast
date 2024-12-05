const tags = [
  { id: 1, text: "Agencia" },
  { id: 2, text: "Consultoria" },
  { id: 3, text: "Marketing" },
  { id: 4, text: "Diseño" },
  { id: 5, text: "Contemporaneo" },
  { id: 6, text: "SEO" },
  { id: 7, text: "SEM" },
  { id: 8, text: "Optimisación" },
  { id: 9, text: "Moderno" },
];

export default function Tags() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((category) => (
            <li key={category.id}>
              <a href="#">{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

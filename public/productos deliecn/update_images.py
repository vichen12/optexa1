import re

with open('Brochure_STOKA.html', 'r', encoding='utf-8') as f:
    html = f.read()

def build_carousel(images):
    if len(images) == 1:
        return f'<img src="{images[0]}">'
    
    slides = ""
    dots = ""
    for i, img in enumerate(images):
        slides += f'<div class="carousel-slide"><img src="{img}"></div>'
        active = ' active' if i == 0 else ''
        dots += f'<div class="carousel-dot{active}"></div>'
        
    return f'''<div class="carousel">
  <div class="carousel-track">
    {slides}
  </div>
  <button class="carousel-btn prev">&#10094;</button>
  <button class="carousel-btn next">&#10095;</button>
  <div class="carousel-dots">
    {dots}
  </div>
</div>'''

def replace_svg_for_shelf(html, title_str, images):
    pattern = r'<div class="(prod-img-shelf)">\s*<svg.*?</svg>\s*</div>(?=\s*<h3>' + re.escape(title_str) + r')'
    replacement = r'<div class="\1">' + build_carousel(images) + r'</div>'
    new_html, count = re.subn(pattern, replacement, html, flags=re.DOTALL)
    if count == 0:
        print(f"Failed to replace for {title_str}")
    else:
        print(f"Success for {title_str}")
    return new_html

html = replace_svg_for_shelf(html, 'Estantería para Robot Pallet Shuttle', [
    'Estanterías de almacén/Estanterías robóticas con lanzadera para palés/pallet-shuttle-racking72941.webp',
    'Estanterías de almacén/Estanterías robóticas con lanzadera para palés/pallet-shuttle-rackingca1dd.webp'
])
html = replace_svg_for_shelf(html, 'Estantería para Tote Shuttle', [
    'Estanterías de almacén/Estantería del robot Tote Shuttle/tote-shuttle-robot-racking39314.webp',
    'Estanterías de almacén/Estantería del robot Tote Shuttle/tote-shuttle-robot-rackingd35cf.webp'
])
html = replace_svg_for_shelf(html, 'Estantería para Grúa Apiladora', ['Estanterías de almacén/Estanterías para grúa apiladora de paletas/pallet-stacker-crane-racking5c1c8.webp'])
html = replace_svg_for_shelf(html, 'Estantería Mini-Flybox', ['Estanterías de almacén/Mini-estantería Flybox/mini-flybox-racking93d5a.webp'])
html = replace_svg_for_shelf(html, 'Estantería Grúa + Shuttle Combinada', ['Estanterías de almacén/Transelevador Grúa + Estantería Robot Lanzadera/pallet-stacker-crane--pallet-shuttle-robot-rackinga1fcf.webp'])
html = replace_svg_for_shelf(html, 'Estanterías Miniload y de Almacenamiento', ['Estanterías de almacén/Estanterías Miniload/miniload-rackinga0ea0.webp'])

with open('Brochure_STOKA.html', 'w', encoding='utf-8') as f:
    f.write(html)

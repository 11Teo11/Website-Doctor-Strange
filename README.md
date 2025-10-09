# Doctor Strange – Website de prezentare

## Descriere

Acesta este un website static, realizat în **HTML5**, **CSS3** și **JavaScript**, care prezintă filmul *Doctor Strange (2016)*.  
Site-ul oferă informații despre film, actori, imagini reprezentative, precum și o secțiune interactivă unde vizitatorii pot adăuga recenzii.

---

## Structura site-ului

Website-ul este organizat în patru pagini principale:

| Pagină | Descriere |
|--------|------------|
| `proiect_pag1.html` | Pagina principală – descriere generală a filmului, data premierei și o galerie cu postere oficiale. |
| `proiect_pag2.html` | Prezintă un rezumat detaliat al filmului, împărțit în secțiuni tematice (Introducere, Accidentul, Antrenamentul etc.). |
| `proiect_pag3.html` | Oferă informații și imagini despre actorii principali din distribuție. |
| `proiect_pag4.html` | Conține o secțiune interactivă de recenzii, unde utilizatorii pot adăuga opinii și nota filmul. |

---

## Tehnologii utilizate

- **HTML5** – structurarea conținutului și organizarea secțiunilor;
- **CSS3** – design modern, cu meniuri dinamice, efecte hover și grile flexibile;
- **JavaScript (ES6)** – interactivitate:
  - afișarea și validarea formularului de recenzie;
  - stocarea recenziilor în `localStorage`;
  - efecte vizuale dinamice (culori care se schimbă periodic);
  - desenarea unui element grafic pe canvas.

---

## Funcționalități interactive

- Adăugare și validare recenzii (cu nume, text și scor între 1–5);
- Salvarea automată a recenziilor în browser (persistente între sesiuni);
- Posibilitatea ștergerii ultimei recenzii apăsând tasta **Delete**;
- Animație de culoare pentru fiecare recenzie nouă;
- Desenarea unei fețe zâmbitoare în partea de jos a paginii prin elementul `<canvas>`.

---

## Imagini și conținut media

Toate resursele vizuale se află în folderul `poze/`, care include:
- postere oficiale ale filmului;
- imagini din scene cheie;
- fotografii cu actorii principali;
- favicon și elemente decorative pentru titluri.

---

## Responsivitate

Designul este adaptat pentru orice dispozitiv:
- layout realizat cu **Flexbox** și **CSS Grid**;
- redimensionarea automată a imaginilor;
- meniuri drop-down funcționale și pe ecrane mici.

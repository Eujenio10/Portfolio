# 🚀 Portfolio Template per GitHub Pages

Un template moderno e dinamico per il tuo portfolio personale, perfetto per sviluppatori software. Include animazioni fluide, design responsive e funzionalità interattive.

## ✨ Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale
- **Responsive**: Ottimizzato per tutti i dispositivi
- **Animazioni Fluide**: Effetti CSS e JavaScript avanzati
- **Dark Mode**: Toggle per la modalità scura
- **Sezioni Complete**: Hero, About, Skills, Projects, Contact
- **Form di Contatto**: Funzionale e interattivo
- **SEO Friendly**: Struttura HTML semantica

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica
- **CSS3**: Stili moderni con CSS Grid e Flexbox
- **JavaScript ES6+**: Interattività e animazioni
- **Font Awesome**: Icone professionali
- **Google Fonts**: Tipografia Inter

## 📁 Struttura del Progetto

```
PORTFOLIO/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # JavaScript e animazioni
└── README.md          # Questo file
```

## 🎨 Personalizzazione

### 1. Informazioni Personali

Modifica il file `index.html` e sostituisci:

- **Nome**: Sostituisci "Il Tuo Nome" con il tuo nome
- **Titolo**: Cambia "Sviluppatore Software Full-Stack" con la tua specializzazione
- **Descrizione**: Personalizza la descrizione nella sezione hero
- **Statistiche**: Aggiorna i numeri nella sezione "Chi Sono"

### 2. Competenze

Nella sezione skills, modifica:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

Aggiungi o rimuovi le tue competenze. Trovi le icone su [Font Awesome](https://fontawesome.com/icons).

### 3. Progetti

Sostituisci i progetti di esempio con i tuoi:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Aggiungi un'immagine del progetto qui -->
        <div class="project-overlay">
            <div class="project-links">
                <a href="URL_GITHUB" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="URL_DEMO" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Nome Progetto</h3>
        <p>Descrizione del progetto</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnologia 1</span>
            <span class="tech-tag">Tecnologia 2</span>
        </div>
    </div>
</div>
```

### 4. Contatti

Aggiorna le informazioni di contatto:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>tua.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+39 123 456 7890</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>La tua città, Italia</span>
</div>
```

### 5. Social Links

Aggiorna i link social:

```html
<div class="social-links">
    <a href="https://github.com/tuousername" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/tuousername" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com/tuousername" class="social-link">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

### 6. Colori e Stile

Modifica le variabili CSS in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Colore principale */
    --secondary-color: #1e40af;  /* Colore secondario */
    --accent-color: #3b82f6;     /* Colore di accento */
    /* ... altri colori */
}
```

## 🚀 Deploy su GitHub Pages

### Metodo 1: Repository Dedicato

1. Crea un nuovo repository su GitHub
2. Carica tutti i file del portfolio
3. Vai su Settings > Pages
4. Seleziona "Deploy from a branch"
5. Scegli il branch `main` e la cartella `/ (root)`
6. Il tuo portfolio sarà disponibile su `https://username.github.io/repository-name`

### Metodo 2: Repository Username.github.io

1. Crea un repository chiamato `username.github.io` (sostituisci username con il tuo)
2. Carica i file del portfolio
3. Il sito sarà automaticamente disponibile su `https://username.github.io`

### Metodo 3: Branch gh-pages

1. Crea un branch chiamato `gh-pages`
2. Carica i file del portfolio in questo branch
3. Configura GitHub Pages per usare il branch `gh-pages`

## 🔧 Funzionalità Avanzate

### Form di Contatto

Il form di contatto è configurato per simulare l'invio. Per renderlo funzionale:

1. **Formspree**: Usa [Formspree](https://formspree.io/) per gestire le email
2. **Netlify Forms**: Se usi Netlify per il deploy
3. **Backend Custom**: Implementa un backend personalizzato

### Analytics

Aggiungi Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO

Aggiungi meta tag per il SEO:

```html
<meta name="description" content="Portfolio di [Il Tuo Nome] - Sviluppatore Software">
<meta name="keywords" content="sviluppatore, software, web, programmatore">
<meta name="author" content="Il Tuo Nome">
<meta property="og:title" content="Il Tuo Nome - Portfolio">
<meta property="og:description" content="Portfolio di [Il Tuo Nome]">
<meta property="og:image" content="URL_IMMAGINE">
```

## 📱 Responsive Design

Il template è completamente responsive e ottimizzato per:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Performance

Il template include:

- **Lazy Loading**: Le immagini si caricano quando necessario
- **CSS Ottimizzato**: Stili compressi e efficienti
- **JavaScript Minificato**: Codice ottimizzato per le performance
- **Font Ottimizzati**: Caricamento asincrono dei font

## 🔄 Aggiornamenti

Per mantenere il portfolio aggiornato:

1. **Progetti**: Aggiungi regolarmente nuovi progetti
2. **Competenze**: Aggiorna le tue competenze
3. **Contatti**: Mantieni aggiornate le informazioni di contatto
4. **Design**: Personalizza ulteriormente lo stile

## 🤝 Contributi

Se vuoi contribuire al template:

1. Fai un fork del repository
2. Crea un branch per la tua feature
3. Committa le modifiche
4. Crea una Pull Request

## 📄 Licenza

Questo template è rilasciato sotto licenza MIT. Puoi usarlo liberamente per progetti personali e commerciali.

## 🆘 Supporto

Se hai problemi o domande:

1. Controlla la documentazione
2. Cerca nelle issue esistenti
3. Crea una nuova issue con dettagli specifici

---

**Buon coding! 🚀**

*Creato con ❤️ per la community degli sviluppatori* 
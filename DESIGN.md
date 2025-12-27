# tbhb.dev design vision

## About this document

This document establishes the design vision for tbhb.dev, a personal website that
embodies the calm authority, careful proportion, and invisible craftsmanship of
beautifully typeset books adapted thoughtfully for the modern web. It defines the visual
design, typography, layout, interaction patterns, and user experience principles that
guide implementation.

The design should disappear into the reading experience while maintaining the
sophistication and refinement of traditional book typography. Visitors should focus on
content rather than noticing the design, and yet the experience should feel distinctly
considered, warm, and inviting.

## Core philosophy

Create a personal website that feels like reading a well-designed book. Not through
nostalgia or skeuomorphism, but by translating the principles that make physical books
pleasant to read for hours into a modern web experience. The goal is calm, authoritative
presentation where typography and whitespace do the heavy lifting, where restraint is
the primary design tool, and where every element serves the reading experience.

This site presents a person's work, writing, and professional identity. It should feel
like an extension of careful craftsmanship (the same thoughtfulness applied to code and
products applied to self-presentation). The aesthetic communicates competence, attention
to detail, and respect for visitors' time and attention.

## Guiding principles

### From book typography

Restraint and proportion define the visual approach. Beauty emerges through measured
reduction rather than decoration. Every element serves the reading experience. Hierarchy
comes from careful spacing, weight, and positioning rather than dramatic size
differences, bold colors, or visual embellishment.

Unity through consistency creates coherence. A single, exceptionally chosen typeface
family handles all text content, with monospace reserved solely for code. This
limitation is a feature, forcing hierarchy to emerge from spacing, weight, and
positioning rather than font variety.

Generous whitespace frames content rather than filling space. Margins are carefully
proportioned to create focus and prevent cognitive overwhelm. White space serves the
reading experience through asymmetric margins that provide breathing room and through
spacing that creates natural rhythm.

Comfortable line lengths support sustained reading. Body text maintains 60-75 characters
per line as a guideline, prioritizing readability over screen use. Different
content may warrant different approaches, but the principle remains: text should be
comfortable to read for extended periods.

Typographic refinement honors proper details. True curly quotes, em dashes, en dashes
with correct spacing, ligatures, and OpenType features where supported. These details are
invisible when done right but create subliminal quality that distinguishes thoughtful
design from default rendering.

### Adapted for the web

Fluid rather than fixed proportions translate book wisdom to responsive relationships.
Comfortable reading measures adapt across viewports while maintaining the principles
that make text pleasant to read. The site works beautifully from mobile phones to
ultra-wide displays without arbitrary breakpoints.

Hierarchy for scanning acknowledges that web visitors both read deeply and skim quickly.
Clear heading hierarchy and careful spacing enable both modes without compromising
either. The design serves visitors who read linearly and those who jump to specific
sections.

Progressive disclosure embraces web capabilities thoughtfully. Expandable sections,
hover states, and layered information can provide depth without cluttering the primary
reading flow. These enhancements supplement rather than replace the core reading
experience.

Performance as craft means fast loading and smooth rendering are as important as visual
beauty. Font loading strategies, appropriate subsetting, and consideration of system
font fallbacks maintain the quality of the reading experience from first paint. A
beautiful site that loads slowly fails its fundamental purpose.

### Accessibility as foundation

Universal design is not a constraint but an integral part of excellence. Proper semantic
structure, clear hierarchy, adequate contrast, and keyboard navigation serve all users
while aligning perfectly with the principles of good book typography.

Readable typography choices serve extended reading for everyone. Generous line height,
appropriate contrast, and clear hierarchy benefit screen reader users navigating the
document as much as sighted users scanning the page.

Inclusive color means palettes maintain adequate contrast ratios for text legibility.
Color alone never conveys meaning: links have underlines, active states combine visual
cues, and status information uses icons alongside color.

Semantic structure provides the foundation. Headings reflect true document structure,
landmarks define regions, and lists use correct markup. This serves assistive
technology while providing the structural skeleton for all styling.

## Typography

### Typeface selection

Spectral serves all text content except code. Designed by Production Type (Jean-Baptiste
Levée) and commissioned by Google for intensive text environments, Spectral proves that
screen typefaces need not compromise sophistication for readability. The typeface draws
from the French Elzevir tradition of nineteenth-century printing with heavy triangular serifs,
high contrast between thick and thin strokes, and moderate x-height with open apertures.

Unlike oversimplified "screen-friendly" fonts, Spectral embraces typographic complexity
while using orthogonal segments and clear diagonals optimized for display rendering. Its
seven weights (ExtraLight through ExtraBold) plus matching italics and small caps
provide comprehensive tools for refined hierarchy. The typeface feels like reading a
well-designed book adapted for the screen, precisely the experience this design vision
describes.

IBM Plex Mono provides monospace for all code contexts. Designed by Mike Abbink at IBM
with Bold Monday, Plex Mono balances technical precision with humanist warmth. The
design features square counters, right-angle interiors contrasting with smooth
exteriors, and thoughtful details like a double-story lowercase a and slashed zero.

Both typefaces share sophisticated corporate design pedigrees, comprehensive weight
ranges, and screen-first optimization. The transition from Spectral prose to Plex Mono
code feels natural rather than jarring.

### Scale and rhythm

Heading sizes show restraint. H1 might be only 1.5-2× body size. Hierarchy comes from
spacing and positioning as much as size. Body text at 18-21px with line height around
1.5-1.65 matches book proportions while remaining comfortable for screen reading.

Spectral's comprehensive weight range enables refined hierarchy. ExtraLight and Light
work for large display text where appropriate. Regular handles body text. Medium provides
subtle emphasis or subheadings. SemiBold and Bold serve headings. ExtraBold works
sparingly for full emphasis.

## Color palette

### Light mode

Warm paper tones replace stark white backgrounds. Think aged book pages: subtle cream or
warm gray backgrounds with rich black-brown text. These combinations maintain at least
WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text), with AAA preferred
where achievable.

Muted, sophisticated accent colors evoke cloth bindings and letterpress. A
single accent color provides enough contrast for links and interactive elements
without competing for attention.

### Dark mode

Dark mode feels like reading a well-lit book at night, not browsing a typical dark
interface. Warm, deep backgrounds (charcoal with brown undertones rather than cool grays
or pure black) with text in warm off-white or cream maintain the same reading warmth as
light mode.

Code blocks use slightly lighter backgrounds than the main canvas to maintain subtle
distinction. The transition between modes feels like adjusting reading light rather than
switching interfaces. Typography, spacing, and feel remain constant.

### Both modes

Test all color combinations with contrast analyzers and simulate color vision
deficiencies. The system respects user preferences (explicit choice or system settings)
and transitions smoothly between modes. Both palettes support the same interactive
element design, adjusted for adequate contrast in their respective contexts.

## Layout

### Responsive principles

The layout adapts gracefully across viewport sizes while maintaining core principles. On
desktop, generous margins frame centered content in book-like proportions. On mobile,
content expands to fill available width while maintaining comfortable text sizing and
line height.

A single-column primary layout serves most content. Writing, project descriptions, and
about content flow naturally in this format. Navigation remains minimal and
unobtrusive, a quiet presence that helps visitors find their way without demanding
attention.

### Vertical rhythm

Generous spacing between major sections creates natural breathing points. Spacing
relationships remain consistent and proportional throughout. Paragraphs have room to
breathe. Headings create clear section breaks through space rather than heavy styling.

### Content width

The primary content column maintains book-like proportions with generous side margins on
larger screens. The balance between optimal reading measure and available viewport space
defaults to principles of sustained readability. On smaller screens, content expands
appropriately while maintaining comfortable typography.

## Content types

### Writing and essays

Long-form content receives the most careful typographic treatment. Comfortable line
lengths, generous line height, and proper paragraph spacing create an environment for
extended reading. Pull quotes, if used, integrate without disrupting flow.

### Projects

Project descriptions combine prose explanation with supporting visuals and code samples.
The layout maintains reading comfort while allowing images and diagrams to illustrate
the work. Screenshots and figures receive appropriate spacing and optional captions.

### Code samples

Code blocks integrate into the site aesthetic through subtle differentiation rather
than strong contrast. Syntax highlighting uses muted, sophisticated colors that provide
functional distinction without visual jarring. Adequate padding prevents cramped
appearance.

### Home and landing content

The homepage establishes identity and provides navigation without overwhelming. Brief
introduction, clear pathways to primary content, and consistent aesthetic with the rest
of the site. The homepage is not a marketing page but an entrance that sets
expectations for what follows.

## Elements

### Navigation

Navigation remains quiet and functional. Primary navigation lists available sections
without elaborate styling or dropdown complexity. Active states show current
location through subtle but clear visual cues beyond color alone.

On mobile, navigation adapts appropriately without hamburger menus if possible. The
site's minimal structure should allow direct navigation links. If collapsing is
necessary, the interaction should feel natural and unobtrusive.

### Links

Underlined in body text with accent color providing extra visual distinction.
Underlines ensure links are identifiable without relying solely on color. Hover states
are subtle but perceptible. Focus states use clear visible outlines for keyboard
navigation.

### Interactive states

All interactive elements have clear focus indicators visible to keyboard users. These
feel integrated with the design rather than browser defaults. Hover and focus states do
not rely on color changes alone.

### Images and figures

Visual elements integrate naturally into the reading flow. Figures receive appropriate
spacing and optional captions. Images can appear inline within the content column or,
for larger visuals, expand beyond the text column where space permits.

### Code blocks

The subtlest background tint, just enough to distinguish code from prose. Syntax
highlighting balances sophistication with functional readability. Line numbers, if
included, remain unobtrusive. Copy buttons appear on hover without cluttering the
default presentation.

## Device experiences

### Desktop experience

Generous margins frame centered content. Typography operates at comfortable sizes for
sustained reading. The impression is spacious, calm, and focused. Navigation
remains visible but quiet. The experience feels like opening a well-designed book.

### Mobile experience

Content takes priority. Navigation and auxiliary elements remain accessible without
dominating limited screen space. The book-like aesthetic translates through typography,
spacing, and restraint rather than layout structure.

Text sizing and spacing optimize for mobile reading. Touch targets maintain appropriate
sizes. The principles of comfortable sustained reading apply even more critically on
smaller screens where users may read for extended periods.

## What this is not

This site is not a typical modern personal portfolio with bold colors, heavy animations,
or attention-grabbing elements. The site avoids trends and flashiness. No dramatic
animations or parallax effects. The design does not try to look like an app interface.

This site is not about nostalgia or skeuomorphism. While inspired by books, it does not
attempt to recreate physical book metaphors or faux textures.

This site is not minimal in the sense of being stark or cold. Minimalism here means
thoughtful reduction (removing the unnecessary to let the essential breathe) combined with
warmth from carefully chosen typography and color.

This site is not a comprehensive platform with complex features. It presents writing,
projects, and professional identity. More complexity would undermine the focused
reading experience that defines its character.

## Success criteria

The design succeeds when visitors report the site is pleasant to read, when the design
feels calm and trustworthy, when navigation is effortless without being obtrusive, when
typography creates clear hierarchy aiding both scanning and deep reading, when the
experience feels cohesive and considered, when visitors focus on content rather than
noticing the design, when the site works beautifully from mobile to ultra-wide displays,
when performance remains strong despite typographic sophistication, and when all
visitors can navigate and consume content regardless of ability or input method.

Most importantly, the design succeeds when it honestly represents the care and
craftsmanship that defines the work it presents.

## Implementation priorities

Build with these priorities in order:

Semantic HTML first. Proper document structure with appropriate heading hierarchy,
landmarks, and semantic elements creates the foundation for both styling and
accessibility.

Typography and spacing. Get the type, line height, and spacing right before adding any
other elements. Ensure all text meets contrast requirements.

Mobile and desktop equally. Design and test both experiences together. Neither is a
reduced version of the other.

Progressive enhancement. Core content and navigation work without JavaScript.
Enhancements layer on top.

Performance. Fast loading and smooth rendering benefit all users. Set performance
budgets and maintain them.

Accessibility testing. Test with keyboard only, test with screen readers, run automated
tools. Accessibility is not a phase but a continuous practice.

## Inspiration sources

Classic book typography and the Van de Graaf canon provide foundational principles.
Edward Tufte's work on information design offers guidance on integrating visuals with
text. The Bringhurst tradition of refined typography informs typographic decisions.
Modern implementations like Linear docs, Stripe documentation, and carefully designed
blogs show these principles on the web.

The goal is synthesis: translating what makes physical books great reading
experiences for modern web presentation of personal and professional identity.

---

This document serves as the north star for design decisions on tbhb.dev. When making
choices about visual design, typography, layout, or interaction, return to these
principles and ask: does this decision honor the craft of traditional typography while
serving modern web needs? Does it maintain accessibility as integral to excellence? Does
it create an experience where design disappears into reading? Does it honestly represent
the care that defines the work presented here?

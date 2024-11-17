import React, { useState } from "react";
import "./App.css"; // Import your CSS file
const htmlElements = [
  {
    count: 1,
    name: "<html>",
    description: "The root element of an HTML document.",
    example: '<html lang="en"></html>',
  },
  {
    count: 2,
    name: "<head>",
    description:
      "Container for metadata (data about data) and links to stylesheets and scripts.",
    example: "<head><title>Document</title></head>",
  },
  {
    count: 3,
    name: "<title>",
    description:
      "Specifies the title of the HTML document, shown in the browser tab.",
    example: "<title>My Page</title>",
  },
  {
    count: 4,
    name: "<base>",
    description:
      "Specifies the base URL for all relative URLs in the document.",
    example: '<base href="https://www.example.com/">',
  },
  {
    count: 5,
    name: "<link>",
    description:
      "Defines the relationship between the current document and an external resource, typically for stylesheets.",
    example: '<link rel="stylesheet" href="styles.css">',
  },
  {
    count: 6,
    name: "<meta>",
    description:
      "Defines metadata about the HTML document, such as character set and viewport settings.",
    example: '<meta charset="UTF-8">',
  },
  {
    count: 7,
    name: "<style>",
    description: "Defines style information (CSS) for a document.",
    example: "<style>body { background-color: lightblue; }</style>",
  },
  {
    count: 8,
    name: "<script>",
    description:
      "Defines client-side JavaScript code or links to external JavaScript files.",
    example: '<script src="script.js"></script>',
  },
  {
    count: 9,
    name: "<noscript>",
    description:
      "Defines alternative content for users that have disabled scripts in their browser.",
    example:
      "<noscript>Please enable JavaScript to view this content.</noscript>",
  },
  {
    count: 10,
    name: "<body>",
    description:
      "Defines the body of the document, containing the content displayed in the browser.",
    example: "<body>Hello World!</body>",
  },
  {
    count: 11,
    name: "<header>",
    description:
      "Defines a header for a document or section, typically containing introductory content or navigational links.",
    example: "<header><h1>Welcome</h1></header>",
  },
  {
    count: 12,
    name: "<footer>",
    description:
      "Defines a footer for a document or section, typically containing copyright information or links.",
    example: "<footer><p>Copyright 2024</p></footer>",
  },
  {
    count: 13,
    name: "<nav>",
    description: "Defines a set of navigation links.",
    example: '<nav><ul><li><a href="#">Home</a></li></ul></nav>',
  },
  {
    count: 14,
    name: "<section>",
    description:
      "Defines a section in a document, used to group related content.",
    example: "<section><h2>About</h2><p>This is about us.</p></section>",
  },
  {
    count: 15,
    name: "<article>",
    description:
      "Defines an independent piece of content, such as a blog post or news article.",
    example: "<article><h2>News Article</h2><p>Some content...</p></article>",
  },
  {
    count: 16,
    name: "<aside>",
    description:
      "Defines content that is tangentially related to the content around it, often used for sidebars.",
    example: "<aside><p>Related information</p></aside>",
  },
  {
    count: 17,
    name: "<h1>",
    description: "Defines the most important heading in the document.",
    example: "<h1>Main Title</h1>",
  },
  {
    count: 18,
    name: "<h2>",
    description: "Defines a second-level heading.",
    example: "<h2>Subheading</h2>",
  },
  {
    count: 19,
    name: "<h3>",
    description: "Defines a third-level heading.",
    example: "<h3>Sub-subheading</h3>",
  },
  {
    count: 20,
    name: "<h4>",
    description: "Defines a fourth-level heading.",
    example: "<h4>Smaller Heading</h4>",
  },
  {
    count: 21,
    name: "<h5>",
    description: "Defines a fifth-level heading.",
    example: "<h5>Even Smaller Heading</h5>",
  },
  {
    count: 22,
    name: "<h6>",
    description: "Defines a sixth-level heading.",
    example: "<h6>Smallest Heading</h6>",
  },
  {
    count: 23,
    name: "<hgroup>",
    description: "Groups multiple headings into a single unit.",
    example: "<hgroup><h1>Title</h1><h2>Subtitle</h2></hgroup>",
  },
  {
    count: 24,
    name: "<p>",
    description: "Defines a paragraph of text.",
    example: "<p>This is a paragraph.</p>",
  },
  {
    count: 25,
    name: "<hr>",
    description:
      "Defines a thematic break in the content, usually displayed as a horizontal line.",
    example: "<hr>",
  },
  {
    count: 26,
    name: "<pre>",
    description:
      "Defines preformatted text, preserving spaces and line breaks.",
    example: "<pre>  Code block  </pre>",
  },
  {
    count: 27,
    name: "<blockquote>",
    description: "Defines a section that is quoted from another source.",
    example: "<blockquote>This is a quote.</blockquote>",
  },
  {
    count: 28,
    name: "<ol>",
    description:
      "Defines an ordered list, where list items are marked with numbers.",
    example: "<ol><li>First item</li></ol>",
  },
  {
    count: 29,
    name: "<ul>",
    description:
      "Defines an unordered list, where list items are marked with bullets.",
    example: "<ul><li>Bullet point</li></ul>",
  },
  {
    count: 30,
    name: "<li>",
    description: "Defines a list item, used within <ol> and <ul>.",
    example: "<li>List item</li>",
  },
  {
    count: 31,
    name: "<dl>",
    description: "Defines a description list.",
    example: "<dl><dt>Term</dt><dd>Definition</dd></dl>",
  },
  {
    count: 32,
    name: "<dt>",
    description: "Defines a term/name in a description list.",
    example: "<dt>Term</dt>",
  },
  {
    count: 33,
    name: "<dd>",
    description:
      "Defines a description of the term/name in a description list.",
    example: "<dd>Description</dd>",
  },
  {
    count: 34,
    name: "<figure>",
    description:
      "Specifies self-contained content, like illustrations or diagrams.",
    example:
      '<figure><img src="image.jpg" alt="Image"><figcaption>Image caption</figcaption></figure>',
  },
  {
    count: 35,
    name: "<figcaption>",
    description: "Defines a caption for a <figure> element.",
    example: "<figcaption>Caption for the figure.</figcaption>",
  },
  {
    count: 36,
    name: "<div>",
    description:
      "Defines a generic container for content, used for styling with CSS.",
    example: '<div class="container">Content</div>',
  },
  {
    count: 37,
    name: "<a>",
    description:
      "Defines a hyperlink that links to another webpage or resource.",
    example: '<a href="https://www.example.com">Visit Example</a>',
  },
  {
    count: 38,
    name: "<em>",
    description: "Defines emphasized text, usually displayed in italics.",
    example: "<em>This text is emphasized.</em>",
  },
  {
    count: 39,
    name: "<strong>",
    description: "Defines strong importance, usually displayed in bold.",
    example: "<strong>This text is strong.</strong>",
  },
  {
    count: 40,
    name: "<small>",
    description: "Defines smaller text, often used for fine print.",
    example: "<small>Small print</small>",
  },
  {
    count: 41,
    name: "<s>",
    description:
      "Defines text that is no longer accurate or relevant (strikethrough).",
    example: "<s>This text is struck through.</s>",
  },
  {
    count: 42,
    name: "<cite>",
    description:
      "Defines the title of a work, such as a book, movie, or article.",
    example: "<cite>Book Title</cite>",
  },
  {
    count: 43,
    name: "<q>",
    description: "Defines a short inline quotation.",
    example: "<q>This is a quote.</q>",
  },
  {
    count: 44,
    name: "<dfn>",
    description: "Defines a definition term.",
    example: "<dfn>HTML</dfn> stands for HyperText Markup Language.",
  },
  {
    count: 45,
    name: "<abbr>",
    description: "Defines an abbreviation or acronym.",
    example: '<abbr title="HyperText Markup Language">HTML</abbr>',
  },
  {
    count: 46,
    name: "<data>",
    description: "Links content with a machine-readable translation.",
    example: '<data value="12345">Some text</data>',
  },
  {
    count: 47,
    name: "<time>",
    description: "Represents a specific period in time.",
    example: '<time datetime="2024-10-22">October 22, 2024</time>',
  },
  {
    count: 48,
    name: "<mark>",
    description: "Defines text that has been highlighted.",
    example: "<mark>Highlighted text</mark>",
  },
  {
    count: 49,
    name: "<ruby>",
    description:
      "Defines a ruby annotation (a form of annotation for Chinese characters).",
    example: "<ruby>漢字<rt>hànzì</rt></ruby>",
  },
  {
    count: 50,
    name: "<rt>",
    description:
      "Defines the pronunciation of characters in a ruby annotation.",
    example: "<rt>hànzì</rt>",
  },
  {
    count: 51,
    name: "<rp>",
    description:
      "Defines what to show for users that do not support ruby annotations.",
    example: "<rp>(</rp><ruby>漢字<rt>hànzì</rt></ruby><rp>)</rp>",
  },
  {
    count: 52,
    name: "<bdi>",
    description:
      "Defines text that should not be affected by the surrounding text direction.",
    example: "<bdi>Text</bdi>",
  },
  {
    count: 53,
    name: "<bdo>",
    description:
      "Defines the direction of text (left-to-right or right-to-left).",
    example: '<bdo dir="rtl">Right to Left</bdo>',
  },
  {
    count: 54,
    name: "<span>",
    description:
      "Defines a section in a document, used to group inline-elements.",
    example: '<span class="highlight">Highlighted text</span>',
  },
  {
    count: 55,
    name: "<iframe>",
    description:
      "Defines an inline frame, used to embed another document within the current HTML document.",
    example: '<iframe src="https://www.example.com"></iframe>',
  },
  {
    count: 56,
    name: "<img>",
    description: "Defines an image in the document.",
    example: '<img src="image.jpg" alt="Description">',
  },
  {
    count: 57,
    name: "<map>",
    description:
      "Defines an image map, which is an image with clickable areas.",
    example:
      '<map><area shape="rect" coords="34,44,270,350" href="image.jpg"></map>',
  },
  {
    count: 58,
    name: "<area>",
    description: "Defines a clickable area within an image map.",
    example: '<area shape="rect" coords="34,44,270,350" href="example.htm">',
  },
  {
    count: 59,
    name: "<canvas>",
    description:
      "Defines a space for rendering graphics via scripting (usually JavaScript).",
    example: '<canvas id="myCanvas" width="200" height="100"></canvas>',
  },
  {
    count: 60,
    name: "<svg>",
    description:
      "Defines a container for Scalable Vector Graphics (SVG) content.",
    example:
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
  },
  {
    count: 61,
    name: "<math>",
    description: "Defines a container for mathematical expressions.",
    example: "<math><msup><mi>x</mi><mn>2</mn></msup></math>",
  },
  {
    count: 62,
    name: "<table>",
    description: "Defines a table.",
    example: "<table><tr><td>Data</td></tr></table>",
  },
  {
    count: 63,
    name: "<caption>",
    description: "Defines a title or caption for a table.",
    example: "<caption>Table Caption</caption>",
  },
  {
    count: 64,
    name: "<th>",
    description: "Defines a header cell in a table.",
    example: "<th>Header</th>",
  },
  {
    count: 65,
    name: "<tr>",
    description: "Defines a row in a table.",
    example: "<tr><td>Data</td></tr>",
  },
  {
    count: 66,
    name: "<td>",
    description: "Defines a standard cell in a table.",
    example: "<td>Data</td>",
  },
  {
    count: 67,
    name: "<tbody>",
    description: "Groups the body content in a table.",
    example: "<tbody><tr><td>Data</td></tr></tbody>",
  },
  {
    count: 68,
    name: "<thead>",
    description: "Groups the header content in a table.",
    example: "<thead><tr><th>Header</th></tr></thead>",
  },
  {
    count: 69,
    name: "<tfoot>",
    description: "Groups the footer content in a table.",
    example: "<tfoot><tr><td>Footer</td></tr></tfoot>",
  },
  {
    count: 70,
    name: "<col>",
    description: "Specifies column properties for an <colgroup> element.",
    example: '<col style="background-color:lightblue">',
  },
  {
    count: 71,
    name: "<colgroup>",
    description: "Defines a group of columns in a table.",
    example: "<colgroup><col><col></colgroup>",
  },
  {
    count: 72,
    name: "<form>",
    description: "Defines an HTML form for user input.",
    example: '<form action="/submit" method="post"></form>',
  },
  {
    count: 73,
    name: "<label>",
    description: "Defines a label for an <input> element.",
    example: '<label for="name">Name:</label>',
  },
  {
    count: 74,
    name: "<input>",
    description:
      "Defines an input control, such as a text box, checkbox, or radio button.",
    example: '<input type="text" id="name">',
  },
  {
    count: 75,
    name: "<button>",
    description: "Defines a clickable button.",
    example: '<button type="submit">Submit</button>',
  },
  {
    count: 76,
    name: "<select>",
    description: "Defines a dropdown list.",
    example: "<select><option>Option 1</option></select>",
  },
  {
    count: 77,
    name: "<option>",
    description: "Defines an option in a dropdown list or a list box.",
    example: '<option value="1">Option 1</option>',
  },
  {
    count: 78,
    name: "<optgroup>",
    description: "Groups nested <option> elements inside a <select> element.",
    example: '<optgroup label="Group 1"><option>Option 1</option></optgroup>',
  },
  {
    count: 79,
    name: "<textarea>",
    description: "Defines a multi-line text input control.",
    example: '<textarea rows="4" cols="50">Text here...</textarea>',
  },
  {
    count: 80,
    name: "<progress>",
    description: "Represents the progress of a task.",
    example: '<progress value="70" max="100"></progress>',
  },
  {
    count: 81,
    name: "<meter>",
    description: "Defines a measurement within a known range, such as a gauge.",
    example: '<meter value="0.6">60%</meter>',
  },
  {
    count: 82,
    name: "<details>",
    description: "Defines additional details that the user can view or hide.",
    example: "<details><summary>More info</summary><p>Details...</p></details>",
  },
  {
    count: 83,
    name: "<summary>",
    description: "Defines a summary or heading for a <details> element.",
    example: "<summary>Click to expand</summary>",
  },
  {
    count: 84,
    name: "<dialog>",
    description: "Defines a dialog box or window.",
    example: "<dialog open>Dialog content here</dialog>",
  },
  {
    count: 85,
    name: "<template>",
    description:
      "Defines a template for content that can be cloned and inserted into the document.",
    example: "<template><p>Template content</p></template>",
  },
  {
    count: 86,
    name: "<slot>",
    description:
      "Defines a placeholder inside a web component, where the user can insert their own content.",
    example: "<slot></slot>",
  },
  {
    count: 87,
    name: "<address>",
    description:
      "Defines contact information for the author or owner of a document.",
    example: "<address>Contact us at example@example.com</address>",
  },
  {
    count: 88,
    name: "<applet>",
    description: "Deprecated; used to embed Java applets in documents.",
    example: '<applet code="Example.class" width="300" height="300"></applet>',
  },
  {
    count: 89,
    name: "<acronym>",
    description: "Deprecated; defines an acronym.",
    example: '<acronym title="HyperText Markup Language">HTML</acronym>',
  },
  {
    count: 90,
    name: "<bdo>",
    description:
      "Defines the direction of text (left-to-right or right-to-left).",
    example: '<bdo dir="rtl">Right to Left</bdo>',
  },
  {
    count: 91,
    name: "<big>",
    description: "Deprecated; defines larger text.",
    example: "<big>Large text</big>",
  },
  {
    count: 92,
    name: "<blink>",
    description: "Deprecated; makes text blink.",
    example: "<blink>This text blinks</blink>",
  },
  {
    count: 93,
    name: "<font>",
    description: "Deprecated; defines font size, color, and face.",
    example: '<font color="red">Red text</font>',
  },
  {
    count: 94,
    name: "<marquee>",
    description: "Deprecated; makes text scroll across the screen.",
    example: "<marquee>This text scrolls</marquee>",
  },
  {
    count: 95,
    name: "<multicol>",
    description: "Deprecated; defines a multi-column layout for text.",
    example: "<multicol>Text in multiple columns</multicol>",
  },
  {
    count: 96,
    name: "<center>",
    description: "Deprecated; centers text.",
    example: "<center>This is centered text</center>",
  },
  {
    count: 97,
    name: "<keygen>",
    description:
      "Deprecated; used to generate a key-pair for secure connections.",
    example: '<keygen name="name">',
  },
  {
    count: 98,
    name: "<listing>",
    description: "Deprecated; used to display preformatted text as code.",
    example: "<listing>Preformatted text</listing>",
  },
  {
    count: 99,
    name: "<plaintext>",
    description: "Deprecated; renders text as plain text without any markup.",
    example: "<plaintext>This text is not parsed.</plaintext>",
  },
  {
    count: 100,
    name: "<template>",
    description:
      "Defines a template for content that can be cloned and inserted into the document.",
    example: "<template><p>Template content</p></template>",
  },
  {
    count: 101,
    name: "<script>",
    description:
      "Defines client-side JavaScript code or links to external JavaScript files.",
    example: '<script src="script.js"></script>',
  },
  {
    count: 102,
    name: "<canvas>",
    description:
      "Defines a space for rendering graphics via scripting (usually JavaScript).",
    example: '<canvas id="myCanvas" width="200" height="100"></canvas>',
  },
  {
    count: 103,
    name: "<video>",
    description: "Defines a video or movie.",
    example:
      '<video controls><source src="movie.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  },
  {
    count: 104,
    name: "<audio>",
    description: "Defines sound content.",
    example:
      '<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>',
  },
  {
    count: 105,
    name: "<source>",
    description:
      "Specifies multiple media resources for <video> and <audio> elements.",
    example: '<source src="movie.mp4" type="video/mp4">',
  },
  {
    count: 106,
    name: "<track>",
    description: "Specifies text tracks for <video> and <audio> elements.",
    example:
      '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
  },
  {
    count: 107,
    name: "<embed>",
    description:
      "Defines a container for an external application or interactive content.",
    example: '<embed src="example.pdf" width="300" height="200">',
  },
  {
    count: 108,
    name: "<object>",
    description:
      "Defines an embedded object, such as an image, video, or Java applet.",
    example: '<object data="movie.mp4" type="video/mp4"></object>',
  },
  {
    count: 109,
    name: "<param>",
    description: "Defines parameters for <object> elements.",
    example: '<param name="autoplay" value="true">',
  },
  {
    count: 110,
    name: "<picture>",
    description: "Defines a container for responsive images.",
    example:
      '<picture><source srcset="img.webp" type="image/webp"><img src="img.jpg" alt="Image"></picture>',
  },
  {
    count: 111,
    name: "<source>",
    description: "Specifies multiple media resources for <picture> element.",
    example: '<source srcset="image.webp" type="image/webp">',
  },
  {
    count: 112,
    name: "<track>",
    description: "Specifies text tracks for <video> and <audio> elements.",
    example:
      '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
  },
  {
    count: 113,
    name: "<summary>",
    description: "Defines a summary for a <details> element.",
    example: "<summary>Summary of details</summary>",
  },
  {
    count: 114,
    name: "<progress>",
    description: "Represents the progress of a task.",
    example: '<progress value="70" max="100"></progress>',
  },
  {
    count: 115,
    name: "<meter>",
    description: "Defines a measurement within a known range, such as a gauge.",
    example: '<meter value="0.6">60%</meter>',
  },
  {
    count: 116,
    name: "<dialog>",
    description: "Defines a dialog box or window.",
    example: "<dialog open>Dialog content here</dialog>",
  },
  {
    count: 117,
    name: "<details>",
    description: "Defines additional details that the user can view or hide.",
    example: "<details><summary>More info</summary><p>Details...</p></details>",
  },
  {
    count: 118,
    name: "<keygen>",
    description:
      "Defines a key-pair generator field, used for secure connections.",
    example: '<keygen name="name">',
  },
  {
    count: 119,
    name: "<progress>",
    description:
      "Defines a progress bar, indicating the completion status of a task.",
    example: '<progress value="70" max="100"></progress>',
  },
  {
    count: 120,
    name: "<meter>",
    description:
      "Defines a measurement within a known range, typically for gauges or progress indicators.",
    example: '<meter value="0.6">60%</meter>',
  },
  {
    count: 121,
    name: "<template>",
    description:
      "Defines a template that can be cloned and inserted into the document.",
    example: "<template><p>Template content</p></template>",
  },
  {
    count: 122,
    name: "<slot>",
    description:
      "Defines a placeholder inside a web component where the user can insert their own content.",
    example: "<slot></slot>",
  },
  {
    count: 123,
    name: "<dialog>",
    description: "Defines a dialog box or window.",
    example: "<dialog open>Dialog content here</dialog>",
  },
  {
    count: 124,
    name: "<details>",
    description: "Defines additional details that the user can view or hide.",
    example: "<details><summary>More info</summary><p>Details...</p></details>",
  },
  {
    count: 125,
    name: "<link>",
    description:
      "Defines a relationship between the current document and an external resource, such as a stylesheet.",
    example: '<link rel="stylesheet" href="styles.css">',
  },
  {
    count: 126,
    name: "<meta>",
    description:
      "Defines metadata about the HTML document, such as character set or viewport settings.",
    example: '<meta charset="UTF-8">',
  },
  {
    count: 127,
    name: "<style>",
    description: "Defines style information (CSS) for the document.",
    example: "<style>body { background-color: lightblue; }</style>",
  },
  {
    count: 128,
    name: "<title>",
    description:
      "Specifies the title of the HTML document, shown in the browser tab.",
    example: "<title>My Page</title>",
  },
  {
    count: 129,
    name: "<script>",
    description:
      "Defines client-side JavaScript code or links to external JavaScript files.",
    example: '<script src="script.js"></script>',
  },
  {
    count: 130,
    name: "<noscript>",
    description:
      "Defines alternative content for users that have disabled scripts in their browser.",
    example:
      "<noscript>Please enable JavaScript to view this content.</noscript>",
  },
  {
    count: 131,
    name: "<base>",
    description:
      "Specifies the base URL for all relative URLs in the document.",
    example: '<base href="https://www.example.com/">',
  },
  {
    count: 132,
    name: "<iframe>",
    description:
      "Defines an inline frame, used to embed another document within the current HTML document.",
    example: '<iframe src="https://www.example.com"></iframe>',
  },
  {
    count: 133,
    name: "<object>",
    description:
      "Defines an embedded object, such as an image, video, or Java applet.",
    example: '<object data="movie.mp4" type="video/mp4"></object>',
  },
  {
    count: 134,
    name: "<embed>",
    description:
      "Defines a container for an external application or interactive content.",
    example: '<embed src="example.pdf" width="300" height="200">',
  },
  {
    count: 135,
    name: "<track>",
    description: "Specifies text tracks for <video> and <audio> elements.",
    example:
      '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
  },
  {
    count: 136,
    name: "<source>",
    description:
      "Specifies multiple media resources for <video> and <audio> elements.",
    example: '<source src="video.mp4" type="video/mp4">',
  },
  {
    count: 137,
    name: "<picture>",
    description: "Defines a container for responsive images.",
    example:
      '<picture><source srcset="img.webp" type="image/webp"><img src="img.jpg" alt="Image"></picture>',
  },
  {
    count: 138,
    name: "<canvas>",
    description:
      "Defines a space for rendering graphics via scripting (usually JavaScript).",
    example: '<canvas id="myCanvas" width="200" height="100"></canvas>',
  },
  {
    count: 139,
    name: "<svg>",
    description:
      "Defines a container for Scalable Vector Graphics (SVG) content.",
    example:
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
  },
  {
    count: 140,
    name: "<math>",
    description: "Defines a container for mathematical expressions.",
    example: "<math><msup><mi>x</mi><mn>2</mn></msup></math>",
  },
  {
    count: 141,
    name: "<area>",
    description: "Defines a clickable area within an image map.",
    example: '<area shape="rect" coords="34,44,270,350" href="example.htm">',
  },
  {
    count: 142,
    name: "<map>",
    description:
      "Defines an image map, which is an image with clickable areas.",
    example:
      '<map><area shape="rect" coords="34,44,270,350" href="example.htm"></map>',
  },
  {
    count: 143,
    name: "<figure>",
    description:
      "Specifies self-contained content, like images or diagrams, along with their captions.",
    example:
      '<figure><img src="image.jpg" alt="Description"><figcaption>Caption here</figcaption></figure>',
  },
  {
    count: 144,
    name: "<figcaption>",
    description: "Defines a caption for a <figure> element.",
    example: "<figcaption>Figure caption</figcaption>",
  },
  {
    count: 145,
    name: "<aside>",
    description:
      "Defines content aside from the main content, often used for sidebars.",
    example: "<aside>Related content</aside>",
  },
  {
    count: 146,
    name: "<header>",
    description:
      "Defines introductory content or a group of navigational links.",
    example: "<header><h1>Title</h1></header>",
  },
  {
    count: 147,
    name: "<footer>",
    description: "Defines footer content for a section or document.",
    example: "<footer>Footer content</footer>",
  },
  {
    count: 148,
    name: "<nav>",
    description: "Defines a set of navigation links.",
    example: '<nav><ul><li><a href="#">Home</a></li></ul></nav>',
  },
  {
    count: 149,
    name: "<main>",
    description:
      "Specifies the main content of the document, unique to that document.",
    example: "<main>Main content here</main>",
  },
  {
    count: 150,
    name: "<section>",
    description: "Defines a section in a document, typically with a heading.",
    example: "<section><h2>Section Title</h2><p>Content here.</p></section>",
  },
  {
    count: 151,
    name: "<article>",
    description:
      "Defines an independent piece of content that could be distributed or reused.",
    example:
      "<article><h2>Article Title</h2><p>Article content here.</p></article>",
  },
  {
    count: 152,
    name: "<time>",
    description:
      "Defines a specific period in time, usually with a datetime attribute.",
    example: '<time datetime="2024-10-22">Today</time>',
  },
  {
    count: 153,
    name: "<mark>",
    description: "Defines text that has been highlighted or marked.",
    example: "<mark>Highlighted text</mark>",
  },
  {
    count: 154,
    name: "<progress>",
    description:
      "Defines a progress bar, indicating the completion status of a task.",
    example: '<progress value="70" max="100"></progress>',
  },
  {
    count: 155,
    name: "<meter>",
    description: "Defines a measurement within a known range, such as a gauge.",
    example: '<meter value="0.6">60%</meter>',
  },
  {
    count: 156,
    name: "<dialog>",
    description: "Defines a dialog box or window.",
    example: "<dialog open>Dialog content here</dialog>",
  },
  {
    count: 157,
    name: "<details>",
    description: "Defines additional details that the user can view or hide.",
    example: "<details><summary>More info</summary><p>Details...</p></details>",
  },
  {
    count: 158,
    name: "<template>",
    description:
      "Defines a template that can be cloned and inserted into the document.",
    example: "<template><p>Template content</p></template>",
  },
  {
    count: 159,
    name: "<slot>",
    description:
      "Defines a placeholder inside a web component where the user can insert their own content.",
    example: "<slot></slot>",
  },
  {
    count: 160,
    name: "<link>",
    description:
      "Defines a relationship between the current document and an external resource, such as a stylesheet.",
    example: '<link rel="stylesheet" href="styles.css">',
  },
  {
    count: 161,
    name: "<meta>",
    description:
      "Defines metadata about the HTML document, such as character set or viewport settings.",
    example: '<meta charset="UTF-8">',
  },
  {
    count: 162,
    name: "<style>",
    description: "Defines style information (CSS) for the document.",
    example: "<style>body { background-color: lightblue; }</style>",
  },
  {
    count: 163,
    name: "<title>",
    description:
      "Specifies the title of the HTML document, shown in the browser tab.",
    example: "<title>My Page</title>",
  },
  {
    count: 164,
    name: "<script>",
    description:
      "Defines client-side JavaScript code or links to external JavaScript files.",
    example: '<script src="script.js"></script>',
  },
  {
    count: 165,
    name: "<noscript>",
    description:
      "Defines alternative content for users that have disabled scripts in their browser.",
    example:
      "<noscript>Please enable JavaScript to view this content.</noscript>",
  },
  {
    count: 166,
    name: "<base>",
    description:
      "Specifies the base URL for all relative URLs in the document.",
    example: '<base href="https://www.example.com/">',
  },
  {
    count: 167,
    name: "<iframe>",
    description:
      "Defines an inline frame, used to embed another document within the current HTML document.",
    example: '<iframe src="https://www.example.com"></iframe>',
  },
  {
    count: 168,
    name: "<object>",
    description:
      "Defines an embedded object, such as an image, video, or Java applet.",
    example: '<object data="movie.mp4" type="video/mp4"></object>',
  },
  {
    count: 169,
    name: "<embed>",
    description:
      "Defines a container for an external application or interactive content.",
    example: '<embed src="example.pdf" width="300" height="200">',
  },
  {
    count: 170,
    name: "<track>",
    description: "Specifies text tracks for <video> and <audio> elements.",
    example:
      '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
  },
  {
    count: 171,
    name: "<source>",
    description:
      "Specifies multiple media resources for <video> and <audio> elements.",
    example: '<source src="video.mp4" type="video/mp4">',
  },
  {
    count: 172,
    name: "<picture>",
    description: "Defines a container for responsive images.",
    example:
      '<picture><source srcset="img.webp" type="image/webp"><img src="img.jpg" alt="Image"></picture>',
  },
  {
    count: 173,
    name: "<svg>",
    description:
      "Defines a container for Scalable Vector Graphics (SVG) content.",
    example:
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
  },
  {
    count: 174,
    name: "<math>",
    description: "Defines a container for mathematical expressions.",
    example: "<math><msup><mi>x</mi><mn>2</mn></msup></math>",
  },
  {
    count: 175,
    name: "<area>",
    description: "Defines a clickable area within an image map.",
    example: '<area shape="rect" coords="34,44,270,350" href="example.htm">',
  },
  {
    count: 176,
    name: "<map>",
    description:
      "Defines an image map, which is an image with clickable areas.",
    example:
      '<map><area shape="rect" coords="34,44,270,350" href="example.htm"></map>',
  },
  {
    count: 177,
    name: "<figure>",
    description:
      "Specifies self-contained content, like images or diagrams, along with their captions.",
    example:
      '<figure><img src="image.jpg" alt="Description"><figcaption>Caption here</figcaption></figure>',
  },
  {
    count: 178,
    name: "<figcaption>",
    description: "Defines a caption for a <figure> element.",
    example: "<figcaption>Figure caption</figcaption>",
  },
  {
    count: 179,
    name: "<aside>",
    description:
      "Defines content aside from the main content, often used for sidebars.",
    example: "<aside>Related content</aside>",
  },
  {
    count: 180,
    name: "<header>",
    description:
      "Defines introductory content or a group of navigational links.",
    example: "<header><h1>Title</h1></header>",
  },
  {
    count: 181,
    name: "<footer>",
    description: "Defines footer content for a section or document.",
    example: "<footer>Footer content</footer>",
  },
  {
    count: 182,
    name: "<nav>",
    description: "Defines a set of navigation links.",
    example: '<nav><ul><li><a href="#">Home</a></li></ul></nav>',
  },
  {
    count: 183,
    name: "<main>",
    description:
      "Specifies the main content of the document, unique to that document.",
    example: "<main>Main content here</main>",
  },
  {
    count: 184,
    name: "<section>",
    description: "Defines a section in a document, typically with a heading.",
    example: "<section><h2>Section Title</h2><p>Content here.</p></section>",
  },
  {
    count: 185,
    name: "<article>",
    description:
      "Defines an independent piece of content that could be distributed or reused.",
    example:
      "<article><h2>Article Title</h2><p>Article content here.</p></article>",
  },
  {
    count: 186,
    name: "<time>",
    description:
      "Defines a specific period in time, usually with a datetime attribute.",
    example: '<time datetime="2024-10-22">Today</time>',
  },
  {
    count: 187,
    name: "<mark>",
    description: "Defines text that has been highlighted or marked.",
    example: "<mark>Highlighted text</mark>",
  },
];
/*
const HtmlElementsList = () => {
  return (
    <div>
      <h1>HTML Elements</h1>
      <ul>
        {htmlElements.map((element) => (
          <li key={element.count} data-count={element.count}>
            <strong>{element.name}</strong>
            <p className="description">{element.description}</p>
            <code className="example">Example: {element.example}</code>
          </li>
        ))}
      </ul>
    </div>
  );
};*/

const HtmlElementsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the elements based on the search term
  const filteredElements = htmlElements.filter((element) =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>HTML Elements</h1>
      <input
        type="text"
        placeholder="Search for an HTML tag..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "96%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
      <ul>
        {filteredElements.length > 0 ? (
          filteredElements.map((element) => (
            <li key={element.count} data-count={element.count}>
              <strong>{element.name}</strong>
              <p className="description">{element.description}</p>
              <code className="example">Example: {element.example}</code>
            </li>
          ))
        ) : (
          <li>No results found.</li> // Display when no results match
        )}
      </ul>
    </div>
  );
};

export default HtmlElementsList;

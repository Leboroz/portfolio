const about = document.createElement('section');
about.id = 'About';
about.className = 'about-section margin-x margin-top';
about.innerHTML = `<article id="aboutHeader" class="about-header">
<h1 class="display-1">About</h1>
<p class="par">Hello! My name is Leonardo Albornoz and I'm a full-stack web developer gradated from Microverse, a remote software development school.

At Microverse, I code every day with other developers around the world and have learned the important skills of communication through
remote pair-programming using GitHub, industry-standard git-flow, and daily stand-ups to communicate and collaborate with
international remote developers. 
Currently, I am learning machine learning because I am very interested in AI.
I love coding specifically because I love the puzzle-solving aspect of it. I'm the sort of person who does DSA problems for fun.
In my free time, I learn new things, play video games, and read.</p>
</article>
<article class="squares-wrapper">
  <div class="square square-1">
    <h2>Languages</h2>
    <ul>
      <li><span>JavaScript (ES5/ES6)</span></li>
      <li><span>Ruby</span></li>
      <li><span>HTML</span></li>
      <li><span>CSS</span></li>
    </ul>
    <div class="image image-lang"></div>
  </div>
  <div class="square square-2">
    <h2>Frameworks</h2>
    <ul>
      <li><span>Bootstrap</span></li>
      <li><span>Ruby on rails</span></li>
      <li><span>RSpec</span></li>
      <li><span>Capibara</span></li>
      <li><span>Jest</span></li>
    </ul>
    <div class="image image-framework"></div>
  </div>
  <div class="square square-3">
    <h2>Skills</h2>
    <ul>
      <li><span>Codekit</span></li>
      <li><span>Figma</span></li>
      <li><span>GitHub</span></li>
      <li><span>Vim</span></li>
      <li><span>Bash</span></li>
    </ul>
    <div class="image image-skills"></div>
  </div>
  <div class="squares-decoration"></div>
</article>`

export default about;

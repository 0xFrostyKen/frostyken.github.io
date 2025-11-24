// Cursor glow effect
document.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// Blog data (embedded)
const blogPosts = {
  idOR: {
    title: "Understanding IDOR in Modern Web Apps",
    date: "June 15, 2024",
    tags: "Web Security, Vulnerability Research",
    content: `
      <p>IDOR remains one of the most common authorization flaws in web applications today. This post explores real-world examples, exploitation techniques using Burp Suite, and defensive patterns like indirect reference maps and proper session validation.</p>
      <p>When testing web applications, I always start by mapping all endpoints that use identifiers (IDs) to reference objects. These could be numeric IDs like <code>user_id=123</code> or string-based identifiers like UUIDs. The key is to verify if the application properly checks if the authenticated user has permission to access the referenced object.</p>
      <p>Common exploitation techniques include:</p>
      <ul>
        <li>Incrementing/decrementing numeric IDs</li>
        <li>Guessing UUIDs or other predictable identifiers</li>
        <li>Changing parameter names (e.g., from <code>user_id</code> to <code>admin_id</code>)</li>
        <li>Testing with different HTTP methods</li>
      </ul>
      <p>Defensive strategies should include:</p>
      <ul>
        <li>Implementing proper access controls on every data access</li>
        <li>Using indirect reference maps instead of direct object references</li>
        <li>Logging and monitoring access to sensitive resources</li>
        <li>Regular security testing with both automated and manual techniques</li>
      </ul>
    `
  },
  ctf: {
    title: "Building Your First CTF Challenge",
    date: "May 22, 2024",
    tags: "CTF, Education, Security Training",
    content: `
      <p>Creating realistic but safe CTF scenarios requires balancing difficulty and learning outcomes. I used Docker containers to isolate challenges, implemented flag validation via simple APIs, and integrated them into a custom scoreboard for live demonstrations.</p>
      <p>Key components of a good CTF challenge:</p>
      <ul>
        <li>Clear objectives that teach specific security concepts</li>
        <li>Progressive difficulty with hints available</li>
        <li>Proper isolation to prevent unintended exploitation</li>
        <li>Automated flag validation and scoring</li>
      </ul>
      <p>For my internship project at ING Skill Academy, I designed challenges covering:</p>
      <ul>
        <li>Basic web vulnerabilities (XSS, SQLi)</li>
        <li>Steganography and file analysis</li>
        <li>Network traffic analysis with Wireshark</li>
        <li>Cryptography basics</li>
      </ul>
      <p>The feedback from participants showed that hands-on challenges significantly improved their understanding of security concepts compared to theoretical learning alone.</p>
    `
  },
  bypass: {
    title: "Bypassing Authentication in Web Applications",
    date: "April 3, 2024",
    tags: "Authentication, Web Security",
    content: `
      <p>Authentication mechanisms are often the first line of defense in web applications. In this article, I'll cover common vulnerabilities and bypass techniques I've encountered during penetration testing.</p>
      <p>Common bypass techniques:</p>
      <ul>
        <li><strong>Password reset token manipulation:</strong> Testing if tokens can be predicted or reused</li>
        <li><strong>Brute force attacks:</strong> Using tools like Hydra or custom scripts</li>
        <li><strong>Account enumeration:</strong> Identifying valid usernames through error messages</li>
        <li><strong>JWT manipulation:</strong> Modifying token algorithms or claims</li>
        <li><strong>Cookie tampering:</strong> Modifying session cookies to escalate privileges</li>
      </ul>
      <p>Defense recommendations:</p>
      <ul>
        <li>Implement strong password policies</li>
        <li>Use multi-factor authentication</li>
        <li>Implement proper rate limiting</li>
        <li>Use secure session management</li>
        <li>Regularly test authentication mechanisms</li>
      </ul>
    `
  },
  scapy: {
    title: "Packet Crafting with Scapy",
    date: "March 18, 2024",
    tags: "Networking, Python, Scapy",
    content: `
      <p>Scapy is a powerful Python library for crafting, sending, and analyzing network packets. In this tutorial, I'll demonstrate how to use it for security testing.</p>
      <p>Basic packet crafting example:</p>
      <pre><code>from scapy.all import *
          
# Create an IP packet
ip = IP(dst="192.168.1.1")
# Add TCP layer
tcp = TCP(dport=80, flags="S")
# Combine layers
packet = ip/tcp
# Send packet
send(packet)</code></pre>
      <p>Advanced uses include:</p>
      <ul>
        <li>Creating custom protocols for testing</li>
        <li>Performing network scans</li>
        <li>Spoofing MAC and IP addresses</li>
        <li>Analyzing network traffic in real-time</li>
        <li>Implementing custom network attacks for testing</li>
      </ul>
      <p>Always use these techniques responsibly and only on systems you own or have explicit permission to test.</p>
    `
  }
};

// Blog navigation
function showBlog(postId) {
  const post = blogPosts[postId];
  if (!post) return;

  document.getElementById('single-blog-title').textContent = post.title;
  document.getElementById('single-blog-date').textContent = post.date;
  document.getElementById('single-blog-tags').textContent = post.tags;
  document.getElementById('single-blog-content').innerHTML = post.content;

  document.getElementById('blog-list').style.display = 'none';
  document.getElementById('blog-single').style.display = 'block';
}

function showBlogList() {
  document.getElementById('blog-list').style.display = 'block';
  document.getElementById('blog-single').style.display = 'none';
}

// Ensure blog list is shown on load
if (document.getElementById('blog-list')) {
  showBlogList();
}
import React from 'react'

export default function Team() {
    const teamMembers = [
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        {
          name: 'Hentoni Doe',
          role: 'CEO-Founder',
          imgSrc: 'images/woman.jpg',
          socialLinks: [
            { href: '#', ariaLabel: 'facebook', icon: FacebookIcon },
            { href: '#', ariaLabel: 'instagram', icon: InstagramIcon },
            { href: '#', ariaLabel: 'twitter', icon: TwitterIcon },
            { href: '#', ariaLabel: 'linkedin', icon: LinkedInIcon },
          ],
        },
        // Add more team members as needed...
      ];
  return (
    <div className="bg-gray-50 py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-28">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
            Tailus blocks leadership
          </h2>
          <p className="text-center text-gray-600 lg:mx-auto lg:w-8/12">
            Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of
            the brightest minds and most experienced executives in business.
          </p>
        </div>
        <div className="grid gap-24 md:grid-cols-3 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>                        
  )
}


// Social Media Icons
const FacebookIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>
  );
  
  const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg>
  );
  
  const TwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.794 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.114 2.13a3.283 3.283 0 0 0 1.018 4.381A3.301 3.301 0 0 1 .64 6.066v.041a3.283 3.283 0 0 0 2.634 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.02-.615-.059a3.287 3.287 0 0 0 3.067 2.277 6.588 6.588 0 0 1-4.862 1.361 9.286 9.286 0 0 0 5.034 1.475" />
    </svg>
  );
  
  const LinkedInIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path d="M0 1.146C0 .513.324 0 .722 0h14.556c.398 0 .722.513.722 1.146v13.708c0 .633-.324 1.146-.722 1.146H.722A.722.722 0 0 1 0 14.854V1.146zM4.943 12.47V6.169H2.542v6.3h2.401zm-1.2-7.197c.837 0 1.359-.554 1.359-1.247-.015-.71-.522-1.248-1.344-1.248-.822 0-1.359.538-1.359 1.248 0 .693.522 1.247 1.328 1.247h.016zm4.911 7.197v-3.176c0-.17.012-.34.062-.461.137-.34.447-.692.969-.692.683 0 .956.521.956 1.285v3.044h2.401V9.06c0-2.305-1.23-3.377-2.87-3.377-1.32 0-1.907.738-2.236 1.254h.031v-1.08H6.497c.031.692 0 6.3 0 6.3h2.401z" />
    </svg>
  );


const TeamMember = ({ name, role, imgSrc, socialLinks }) => {
    return (
      <div className="group space-y-4 text-center">
        <div className="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56">
          <img
            className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src={imgSrc}
            alt={name}
            loading="lazy"
            width="640"
            height="805"
          />
        </div>
        <div className="pt-4">
          <h4 className="text-2xl text-gray-700">{name}</h4>
          <span className="block text-sm text-gray-500">{role}</span>
        </div>
        <div className="flex justify-center space-x-4 text-gray-500">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" aria-label={link.ariaLabel} rel="noopener noreferrer">
              <link.icon className="w-6 hover:text-primary" fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
    );
  };
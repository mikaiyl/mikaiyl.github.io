# Resume Content Update Guide

This guide will help you update your resume content without any technical knowledge. The resume is built using HTML, but don't worry - you only need to replace placeholder text with your own information.

## Quick Start

1. Open the `index.html` file in any text editor (like Notepad on Windows or TextEdit on Mac)
2. Look for text in square brackets like `[Your Name]` - these are placeholders you need to replace
3. Replace the placeholder text with your actual information
4. Save the file when you're done
5. Run `pnpm build` to generate your updated resume

## Step-by-Step Content Updates

### 1. Page Title and Meta Information

**What to find:** Look at the top of the file for these placeholders:
- `[Your Name]`
- `[Your Title/Profession]`
- `[your profession]`
- `[key skills]`
- `[industry keywords]`

**What to replace:**
- `[Your Name]` → Your full name (e.g., "Sarah Johnson")
- `[Your Title/Profession]` → Your job title (e.g., "Software Engineer")
- `[your profession]` → Your profession in lowercase (e.g., "software engineer")
- `[key skills]` → 3-5 important skills, separated by commas (e.g., "JavaScript, React, Node.js")
- `[industry keywords]` → Industry terms (e.g., "web development, full stack, agile")

### 2. Header Section

**What to find:**
- `[Your Full Name]` in the main heading
- `[City, State]` for your location
- Phone number `(555) 555-5555` and email `email@example.com`

**What to replace:**
- `[Your Full Name]` → Your complete name as you want it displayed
- `[City, State]` → Your current location (e.g., "San Francisco, CA")
- Update phone number in TWO places:
  - `tel:+15555555555` → `tel:+1YOURNUMBER` (no spaces or dashes)
  - `(555) 555-5555` → Your formatted phone number
- Update email in TWO places:
  - `mailto:email@example.com` → `mailto:youremail@domain.com`
  - `email@example.com` → Your actual email address

**Optional - Adding LinkedIn/Website:**
If you want to include LinkedIn or a personal website:
1. Find the commented section that starts with `<!-- OPTIONAL LINKS:`
2. Remove the `<!--` at the beginning and `-->` at the end
3. Replace `yourprofile` with your LinkedIn username
4. Replace `yourwebsite.com` with your website URL

### 3. Professional Summary

**What to find:** The paragraph that starts with "Write a brief professional summary..."

**What to replace:** Write 2-3 sentences about yourself, including:
- Years of experience
- Key skills and technologies
- What makes you unique
- Industry keywords relevant to jobs you want

**Example:**
"Experienced Software Engineer with 5+ years developing scalable web applications using JavaScript, React, and Node.js. Proven track record of leading cross-functional teams and delivering high-quality solutions in fast-paced environments. Passionate about clean code, performance optimization, and mentoring junior developers."

### 4. Skills Section

**What to find:** Lists that start with "Replace with your..."

**What to replace:** Update each category with your actual skills:

**Technical Skills:**
- Programming languages you know
- Frameworks and libraries you use
- Web technologies you're familiar with
- Databases you've worked with
- Tools and platforms you use

**Professional Skills:**
- Management and leadership abilities
- Communication and collaboration skills
- Problem-solving approaches

**Certifications & Tools:**
- Professional certifications you hold
- Software tools you use regularly

### 5. Professional Experience

For each job, update:

**Job Header:**
- `[Your Most Recent Job Title]` → Your actual job title
- `[Company Name]` → The company name
- `[Start Month Year] - Present` → Your employment dates
- `[City, State]` → Job location

**Achievement Bullets:**
Replace each "Replace with..." bullet point with your actual achievements. Focus on:
- Specific results and metrics
- Technologies you used
- Leadership and collaboration
- Process improvements
- Impact on the company

**Tips for writing achievements:**
- Start with action verbs (Led, Developed, Implemented, Managed)
- Include numbers when possible (50% improvement, $100K savings)
- Use keywords from job postings you're targeting
- Keep each point to 1-2 lines

### 6. Education Section

**What to find:**
- `[Your Degree] in [Your Field of Study]`
- `[University Name]`
- `[Graduation Month Year]`
- `[Your GPA]`
- Course list in "Replace with courses..."

**What to replace:**
- Degree type and field (e.g., "Bachelor of Science in Computer Science")
- University name and location
- Graduation date
- GPA (only if 3.5 or higher)
- Relevant coursework that matches your target jobs

**For additional degrees:**
If you have multiple degrees, find the commented section and remove the `<!--` and `-->` tags, then fill in the information.

### 7. Projects Section

**What to find:**
- `[Project Name 1]`, `[Project Name 2]`, etc.
- "Replace with a brief description..."

**What to replace:**
- Project names with your actual project titles
- Descriptions with brief explanations of what each project does
- Include technologies used and problems solved
- Focus on projects relevant to jobs you want

**Optional project details:**
To add technology lists or links, remove the `<!--` and `-->` tags around the project details section and customize.

### 8. Certifications Section

**What to find:**
- `[Your Certification Name]`
- `[Issuing Organization]`
- `[Month Year Earned]`
- `[Your Credential ID]`

**What to replace:**
- Certification names with your actual certifications
- Organizations that issued them
- Dates you earned them (update both the `datetime` attribute and display text)
- Credential IDs if you have them

**For in-progress certifications:**
Update the "In Progress" section with certifications you're currently pursuing, or remove this section if you don't have any.

## Important Notes

### Updating Dates
When updating dates, you need to change them in TWO places:
1. The `datetime` attribute (e.g., `datetime="2022-01"`)
2. The display text (e.g., "January 2022")

### Removing Sections
If a section doesn't apply to you (like certifications), you can:
1. Delete the entire section
2. Or leave it empty and it won't show up prominently

### Adding More Entries
To add more jobs, education, or certifications:
1. Copy an existing entry
2. Paste it in the appropriate location
3. Update all the placeholder text

## After Making Changes

1. Save the `index.html` file
2. Open your terminal/command prompt
3. Navigate to your resume folder
4. Run `pnpm build` to generate the updated resume
5. Your updated resume will be in the `dist` folder

## Getting Help

If you get stuck:
1. Make sure you're only replacing text inside square brackets `[like this]`
2. Don't delete any HTML tags (things with `<` and `>`)
3. Save your file frequently
4. If something breaks, you can always restore from the original and start over

## Common Mistakes to Avoid

- Don't delete HTML tags (anything with `<` and `>`)
- Don't remove quotation marks around links and attributes
- Make sure to update both the `datetime` attribute and display text for dates
- Don't leave placeholder text like `[Your Name]` in the final version
- Remember to update phone and email in both the link and display text

Your resume is now ready to be customized with your personal information!
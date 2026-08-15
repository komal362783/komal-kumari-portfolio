import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { DataPipeline } from './components/pipeline/DataPipeline';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { DataSandbox } from './components/sandbox/DataSandbox';
import { Certifications } from './components/certifications/Certifications';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/ui/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setToastMessage(`Copied "${PERSONAL_INFO.email}" to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#070A10] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200 antialiased overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar onCopyEmail={handleCopyEmail} />

      {/* Main Content Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <About />
        <DataPipeline />
        <Skills />
        <Experience />
        <Projects />
        <DataSandbox />
        <Certifications />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      {/* Footer */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        type="success"
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;

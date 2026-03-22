import { useState, useEffect } from 'react';

interface Command {
  cmd: string;
  output: string[];
}

const commands: Record<string, string[]> = {
  help: [
    'Comandos disponibles:',
    '  help     - Muestra esta ayuda',
    '  about    - Acerca de mí',
    '  skills   - Lista de tecnologías',
    '  contact  - Información de contacto',
    '  clear    - Limpia la terminal',
    '',
  ],
  about: [
    '> Carlos Rodriguez',
    '> Desarrollador Full Stack · Backend',
    '> Coquimbo, Chile',
    '',
    'Desarrollador con orientación backend y experiencia',
    'en arquitecturas de microservicios. Especializado en',
    'JavaScript, TypeScript y Java.',
    '',
  ],
  skills: [
    '> Stack Tecnológico:',
    '',
    'Frontend:    React, Next.js, Angular, TypeScript',
    'Backend:    Node.js, Express, AdonisJS, Spring Boot, Laravel',
    'Databases:  PostgreSQL, SQL Server, MongoDB, MySQL',
    'Tools:      Git, Docker, Debugging Avanzado',
    '',
  ],
  contact: [
    '> Información de Contacto:',
    '',
    'Email:    cn.rodriguez@outlook.com',
    'GitHub:   github.com/cn-rodriguez',
    'LinkedIn: linkedin.com/in/cn-rodriguez',
    'Phone:    +569 55266761',
    '',
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      cmd: 'whoami',
      output: ['Carlos Rodriguez - Full Stack Developer'],
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');

  const welcomeMessage = 'Bienvenido a mi portfolio. Escribe "help" para ver comandos disponibles.';

  useEffect(() => {
    if (typedText.length < welcomeMessage.length) {
      const timeout = setTimeout(() => {
        setTypedText(welcomeMessage.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      const cmd = currentInput.toLowerCase().trim();
      let output: string[] = [];

      if (cmd === 'clear') {
        setHistory([]);
        setCurrentInput('');
        return;
      }

      if (commands[cmd]) {
        output = commands[cmd];
      } else if (cmd !== '') {
        output = [`Comando no encontrado: ${cmd}`, 'Escribe "help" para ver comandos disponibles.'];
      }

      setHistory([...history, { cmd: currentInput, output }]);
      setCurrentInput('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dots}>
          <span style={{ ...styles.dot, background: '#ff5f57' }} />
          <span style={{ ...styles.dot, background: '#ffbd2e' }} />
          <span style={{ ...styles.dot, background: '#28ca41' }} />
        </div>
        <span style={styles.title}>carlos@portfolio:~</span>
      </div>

      <div style={styles.body}>
        <div style={styles.welcome}>
          <span style={styles.prompt}>$</span>
          <span style={styles.welcomeText}>{typedText}</span>
          <span style={styles.cursor}>|</span>
        </div>

        {history.map((entry, index) => (
          <div key={index} style={styles.historyEntry}>
            <div style={styles.historyCommand}>
              <span style={styles.prompt}>$</span>
              <span style={styles.commandText}>{entry.cmd}</span>
            </div>
            {entry.output.map((line, lineIndex) => (
              <div key={lineIndex} style={styles.outputLine}>
                {line}
              </div>
            ))}
          </div>
        ))}

        <div style={styles.inputRow}>
          <span style={styles.prompt}>$</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleCommand}
            style={styles.input}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: 'rgba(10, 10, 11, 0.95)',
    border: '1px solid #2a2a2e',
    borderRadius: '12px',
    overflow: 'hidden',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  header: {
    background: '#1a1a1d',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid #2a2a2e',
  },
  dots: {
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  title: {
    color: '#8a8a8d',
    fontSize: '0.8rem',
    marginLeft: 'auto',
  },
  body: {
    padding: '20px',
    minHeight: '280px',
    maxHeight: '320px',
    overflowY: 'auto',
  },
  welcome: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  prompt: {
    color: '#a855f7',
    marginRight: '8px',
  },
  welcomeText: {
    color: '#e8e8e8',
  },
  cursor: {
    color: '#a855f7',
    animation: 'blink 1s step-end infinite',
    marginLeft: '2px',
  },
  historyEntry: {
    marginBottom: '16px',
  },
  historyCommand: {
    display: 'flex',
    alignItems: 'center',
  },
  commandText: {
    color: '#e8e8e8',
  },
  outputLine: {
    color: '#8a8a8d',
    paddingLeft: '20px',
    lineHeight: '1.6',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#e8e8e8',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
};

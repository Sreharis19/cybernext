import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Generate soft, professional color palette (light desaturated tones)
const generateSoftNeutralColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 30%, 95%)`; // low saturation, high lightness
};

// Cache section titles to retain consistent color
const sectionColorCache = {};

const getSectionColor = (sectionTitle) => {
  if (!sectionColorCache[sectionTitle]) {
    sectionColorCache[sectionTitle] = generateSoftNeutralColor();
  }
  return sectionColorCache[sectionTitle];
};

const ModalComponent = ({ show, handleClose, content }) => {
  if (!content) return null;

  const backgroundColor = getSectionColor(content.title);
  const textStyle = { color: '#2c2c2c' }; // dark grey for contrast

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor }}>
        <Modal.Title style={textStyle}>{content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor, ...textStyle }}>
        {content.description && <p>{content.description}</p>}
        {content.details && (
          <ul>
            {content.details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor }}>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

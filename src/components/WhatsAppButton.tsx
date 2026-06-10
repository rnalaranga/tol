'use client';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = '+94740677678'; // WhatsApp format: Country code + number without leading 0
  const message = 'Hello! I would like to know more about Orient Life services.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waButton}
      aria-label="Chat with us on WhatsApp"
    >
      <div className={styles.pulse} />
      <MessageCircle size={28} className={styles.icon} />
    </a>
  );
}

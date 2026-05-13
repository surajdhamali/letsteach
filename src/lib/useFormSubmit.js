// src/lib/useFormSubmit.js
// Reusable hook for all letsteach forms.
// Automatically reads UTM params from sessionStorage and sends to /api/contact.

import { useState } from 'react';

export function useFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  function getUTMs() {
    if (typeof window === 'undefined') return {};
    try {
      return {
        utm_source:   sessionStorage.getItem('utm_source')   || 'direct',
        utm_medium:   sessionStorage.getItem('utm_medium')   || 'none',
        utm_campaign: sessionStorage.getItem('utm_campaign') || 'none',
        utm_term:     sessionStorage.getItem('utm_term')     || 'none',
        utm_adgroup:  sessionStorage.getItem('utm_adgroup')  || 'none',
      };
    } catch {
      return {};
    }
  }

  async function submitForm(fields) {
    setLoading(true);
    setError('');

    try {
      const payload = { ...fields, ...getUTMs() };

      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setSuccess(false);
    setError('');
  }

  return { loading, success, error, submitForm, reset };
}
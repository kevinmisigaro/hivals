'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings } from 'lucide-react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {!showPreferences ? (
                // Main banner
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-blue-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        We value your privacy
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        We use cookies to enhance your browsing experience, analyse site traffic,
                        and personalise content. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                        Read our{' '}
                        <Link href="/privacy" className="text-blue-800 hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        to learn more.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={acceptAll}
                          className="px-5 py-2.5 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
                        >
                          Accept All
                        </button>
                        <button
                          onClick={rejectAll}
                          className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Reject All
                        </button>
                        <button
                          onClick={() => setShowPreferences(true)}
                          className="px-5 py-2.5 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          <Settings className="w-4 h-4" />
                          Manage Preferences
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={rejectAll}
                      className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                // Preferences panel
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close preferences"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Necessary cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-gray-900 mb-1">
                          Strictly Necessary
                        </h4>
                        <p className="text-sm text-gray-600">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-6 bg-blue-800 rounded-full relative cursor-not-allowed">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-gray-900 mb-1">
                          Analytics
                        </h4>
                        <p className="text-sm text-gray-600">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                        }
                        className={`flex-shrink-0 w-12 h-6 rounded-full relative transition-colors ${
                          preferences.analytics ? 'bg-blue-800' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            preferences.analytics ? 'right-1' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Marketing cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-gray-900 mb-1">
                          Marketing
                        </h4>
                        <p className="text-sm text-gray-600">
                          Used to deliver personalised advertisements and track campaigns.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                        }
                        className={`flex-shrink-0 w-12 h-6 rounded-full relative transition-colors ${
                          preferences.marketing ? 'bg-blue-800' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            preferences.marketing ? 'right-1' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={savePreferences}
                      className="px-5 py-2.5 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

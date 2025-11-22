// src/styles.ts (ajuste o caminho conforme seu projeto)
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  box: {
    width: '100%',
    maxWidth: 360,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },


  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },

 
  fieldContainer: {
    width: '100%',
    marginTop: 16,
  },
  fieldLabel: {
    marginBottom: 4,
    color: '#6B7280',
    fontSize: 14,
  },

  passwordWrapper: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 14,
    top: 11,
    padding: 4,
  },
  passwordToggleText: {
    color: '#6B7280',
    fontSize: 12,
  },


  button: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonSpacing: {
    marginTop: 16, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },

  errorText: {
    marginTop: 8,
    fontSize: 13,
    color: '#EF4444',
    textAlign: 'center',
  },

  
  divider: {
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginVertical: 20,
  },


  bottomLink: {
    marginTop: 12,
    alignItems: 'center',
  },
  bottomLinkText: {
    fontSize: 14,
    color: '#2563EB',
  },
});

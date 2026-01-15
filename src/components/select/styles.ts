import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F2F7',
    paddingVertical: 12,
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#F2F2F7',
    color: '#111',
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 12,
    color: '#555',
    marginLeft: 8,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    maxHeight: 300,
    overflow: 'hidden',
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  errorText: {
    marginTop: 4,
    color: '#ff4d4f',
    fontSize: 12,
  },
});

export default styles;

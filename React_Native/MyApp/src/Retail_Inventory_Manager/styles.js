import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
    padding: 20,
  },

  // Dashboard header
  header: {
    marginTop: 12,
    marginBottom: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#172B4D',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B778C',
    marginTop: 6,
  },

  // Navigation buttons
  navigation: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },

  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DFE4EC',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },

  activeButton: {
    backgroundColor: '#172B4D',
    borderColor: '#172B4D',
  },

  navText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#44546F',
  },

  activeNavText: {
    color: '#FFFFFF',
  },

  // Inventory section
  inventorySection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8ECF2',
  },

  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#172B4D',
  },

  itemCount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B778C',
    backgroundColor: '#F0F2F7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  // List headings
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8ECF2',
    marginBottom: 4,
  },

  columnHeading: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.7,
    color: '#6B778C',
  },

  listHeaderText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  listContent: {
    flexGrow: 1,
  },

  // Product rows
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F5',
  },

  productName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#253858',
  },

  quantity: {
    fontSize: 13,
    fontWeight: '700',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  lowStock: {
    color: '#C9372C',
    backgroundColor: '#FFEBE6',
  },

  normalStock: {
    color: '#216E4E',
    backgroundColor: '#DFFCF0',
  },

  emptyMessage: {
    fontSize: 13,
    color: '#8590A2',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 36,
    paddingHorizontal: 12,
  },

  // Add Item form
  InputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    gap: 14,
    borderWidth: 1,
    borderColor: '#E8ECF2',
  },

  input: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },

  addButton: {
    backgroundColor: '#172B4D',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  // Items in stock
  ItemsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8ECF2',
  },
  errorInput: {
    borderColor: '#DC2626',
    borderWidth: 1,
  },

  errorText: {
    color: '#DC2626',
    fontSize: 12,
  },
});

export default styles;

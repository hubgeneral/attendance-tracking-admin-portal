import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  Typography
} from "@mui/material";
import { Close as CloseIcon, PersonAdd as PersonAddIcon } from "@mui/icons-material";

// Types 
interface EditInternData {
  open: boolean;
  employeeId: string;
  employeeName: string;
  email: string;
}

interface EditInternModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (intern: EditInternData) => Promise<void> | void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  idNumber?: string;
}

export default function EditInternModal({ open, onClose, onAdd }: EditInternModalProps) {
  // ================ Form data state - stores all input field values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    idNumber: "",
  });

  // =========== Form validation errors - stores error messages for each field
  const [errors, setErrors] = useState<FormErrors>({});

  // ============= Loading state - prevents multiple submissions and shows loading indicators
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============= Alert state - manages success/error notifications
  const [alert, setAlert] = useState<{
    open: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    open: false,
    type: 'success',
    message: '',
  });

  /**
   * Validates all form fields and returns true if form is valid
   * Sets error messages in the errors state for invalid fields
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // ============== Full name validation - check if empty or too short
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // ======= Email validation - check if empty or invalid format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // ID number validation - check if empty or too short
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID number is required";
    } else if (formData.idNumber.trim().length < 3) {
      newErrors.idNumber = "ID number must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  /**
   * Creates input change handler for each form field
   * Clears validation errors when user starts typing
   */
  const handleInputChange = (field: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    
    // Update form data with new value
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear any existing error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Handles form submission with validation and error handling
   * Shows success/error alerts based on the result
   */
  const handleSubmit = async () => {
    // Don't submit if form validation fails
    if (!validateForm()) return;

    setIsSubmitting(true); // Show loading state

    try {
      // Prepare clean intern data with trimmed values
      const internData: EditInternData = {
          employeeId: formData.idNumber.trim(),
          employeeName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
            open: false,
      };

      // Call the parent component's add function
      await onAdd(internData);

      // Show success notification
      setAlert({
        open: true,
        type: 'success',
        message: 'New intern added successfully!',
      });

      // Reset form and close modal on success
      resetForm();
      onClose();
    } catch (error) {
      // Log error for debugging
      console.error('Failed to add intern:', error);
      
      // Show user-friendly error notification
      setAlert({
        open: true,
        type: 'error',
        message: 'Sorry, we could not add intern. Try again.',
      });
    } finally {
      setIsSubmitting(false); // Hide loading state
    }
  };

  /**
   * Resets all form fields and errors to initial state
   */
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      idNumber: "",
    });
    setErrors({});
  };

  /**
   * Handles modal close - resets form if not submitting
   */
  const handleClose = () => {
    // Prevent closing modal while submission is in progress
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  /**
   * Closes the success/error alert notification
   */
  const handleAlertClose = () => {
    setAlert(prev => ({ ...prev, open: false }));
  };

  // Check if form is valid and ready for submission
  const isFormValid = formData.fullName.trim() && 
                     formData.email.trim() && 
                     formData.idNumber.trim() && 
                     Object.keys(errors).length === 0;

  return (
    <>
      {/* Main Modal Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        disableEscapeKeyDown={isSubmitting} // Prevent accidental close during submission
        PaperProps={{
          sx: {
            borderRadius: '12px',
            minHeight: '400px',
            maxHeight: '90vh',
          }
        }}
      >
        {/* Modal Header with Title and Close Button */}
        <DialogTitle 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '1.5rem',
            fontWeight: 600,
            pb: 2,
            pt: 3,
            px: 3,
            color: '#00274D',
          }}
        >
          {/* Title with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonAddIcon sx={{ fontSize: '1.5rem' }} />
            New Intern
          </Box>
          
          {/* Close Button */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            disabled={isSubmitting}
            sx={{
              color: (theme) => theme.palette.grey[500],
              '&:hover': {
                backgroundColor: (theme) => theme.palette.grey[100],
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        {/* Modal Content - Form Fields */}
        <DialogContent 
          sx={{ 
            px: 3,
            pb: 2,
          }}
        >
          

          <Typography 
          variant="body2" color="text.secondary" sx={{ mb: 3 }} > 
          Fill in the information below to add a new intern to the HM Clockr. 
          </Typography>


          {/* Form Fields Container */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Full Name Input Field */}
            <TextField
              label="Full Name"
              fullWidth
              variant="outlined"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              error={!!errors.fullName} // Show error styling if error exists
              helperText={errors.fullName} // Display error message
              disabled={isSubmitting} // Disable during submission
              placeholder="e.g., Dennis Asiedu"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            
            {/* Email Input Field */}
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isSubmitting}
              placeholder="e.g., dennis@gmail.com"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            
            {/* Employee ID Input Field */}
            <TextField
              label="Id Number"
              fullWidth
              variant="outlined"
              value={formData.idNumber}
              onChange={handleInputChange('idNumber')}
              error={!!errors.idNumber}
              helperText={errors.idNumber}
              disabled={isSubmitting}
              placeholder="e.g., DHG1047"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
          </Box>
        </DialogContent>
        
        {/* Modal Footer - Action Buttons */}
        <DialogActions 
          sx={{ 
            px: 3, 
            pb: 3,
            pt: 2,
            justifyContent: 'center', // center the button
          }}
        >          
          {/* Submit Button - Add Intern */}
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={!isFormValid || isSubmitting} // Disable if form invalid or submitting
            startIcon={
              isSubmitting 
                ? <CircularProgress size={18} color="inherit" /> // spinner while loading
                : <Box 
                    sx={{ 
                      fontSize: "18px", 
                      fontWeight: "bold", 
                      lineHeight: 1 
                    }}
                  >
                    +
                  </Box> 
            }
            sx={{
              backgroundColor: '#004E2B',
              color: 'white',
              px: 20,
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              minWidth: '140px',
              '&:hover': { 
                backgroundColor: '#047857' 
              },
              '&:disabled': {
                backgroundColor: '#9ca3af',
                color: '#ffffff'
              }
            }}
          >
            {isSubmitting ? 'Adding...' : 'Add Intern'}
          </Button>
        </DialogActions>

      </Dialog>

      {/* Success/Error Alert Notification */}
      <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleAlertClose}
            severity={alert.type}
            icon={false} // disable default icon
            sx={{
              backgroundColor: alert.type === "success" ? "#F2FBF6" : "#F2FBF6",
              color: alert.type === "success" ? "#065f46" : "#991b1b",
              border: "1px solid #D9F2E5",
              borderLeft: `4px solid ${
                alert.type === "success" ? "#00AB50" : "#ef4444"
              }`,
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              px: 4,
              py: 1,
              minWidth: "280px",
              "& .MuiAlert-message": {
                padding: 0,
                width: "100%",
              },
            }}
            action={
              <IconButton
                size="small"
                onClick={handleAlertClose}
                sx={{
                  color: "#9ca3af",
                  "&:hover": { color: "#6b7280", backgroundColor: "transparent" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            {/* Flex container for icon + message */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
              {/* Icon FIRST */}
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${
                    alert.type === "success" ? "#10b981" : "#ef4444"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: alert.type === "success" ? "#10b981" : "#ef4444",
                }}
              >
                {alert.type === "success" ? "✓" : "✕"}
              </Box>

              {/* Message */}
              <span>{alert.message}</span>
            </Box>
          </Alert>
        </Snackbar>



    </>
  );
}
// SnapFlow - Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
  console.log('SnapFlow initialized');
  
  // Mobile menu toggle
  initMobileMenu();
  
  // Form handling
  initFormHandling();
  
  // Image preview functionality
  initImagePreview();
  
  // Loading states
  initLoadingStates();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }
}

/**
 * Initialize form handling with validation
 */
function initFormHandling() {
  const forms = document.querySelectorAll('form[data-ajax]');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      
      // Show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Processing...';
      }
      
      // Send AJAX request
      fetch(form.action, {
        method: form.method || 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showNotification('Success!', 'success');
          form.reset();
        } else {
          showNotification(data.message || 'An error occurred', 'error');
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        showNotification('Network error. Please try again.', 'error');
      })
      .finally(() => {
        // Reset button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.originalText || 'Submit';
        }
      });
    });
    
    // Store original button text
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.dataset.originalText) {
      submitButton.dataset.originalText = submitButton.textContent;
    }
  });
}

/**
 * Initialize image preview functionality
 */
function initImagePreview() {
  const fileInputs = document.querySelectorAll('input[type="file"][accept*="image"]');
  
  fileInputs.forEach(input => {
    input.addEventListener('change', function(e) {
      const files = e.target.files;
      const previewContainer = document.getElementById(input.dataset.preview);
      
      if (previewContainer && files.length > 0) {
        previewContainer.innerHTML = '';
        
        Array.from(files).forEach((file, index) => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              img.className = 'w-32 h-32 object-cover rounded-lg border border-gray-200';
              img.alt = `Preview ${index + 1}`;
              
              previewContainer.appendChild(img);
            };
            
            reader.readAsDataURL(file);
          }
        });
      }
    });
  });
}

/**
 * Initialize loading states for buttons and forms
 */
function initLoadingStates() {
  const loadingButtons = document.querySelectorAll('[data-loading]');
  
  loadingButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (!button.disabled) {
        button.disabled = true;
        button.classList.add('opacity-75', 'cursor-not-allowed');
        
        const originalText = button.textContent;
        button.textContent = button.dataset.loading || 'Loading...';
        
        // Reset after 5 seconds as fallback
        setTimeout(() => {
          button.disabled = false;
          button.classList.remove('opacity-75', 'cursor-not-allowed');
          button.textContent = originalText;
        }, 5000);
      }
    });
  });
}

/**
 * Show notification messages
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
  
  // Add type-specific styles
  switch (type) {
    case 'success':
      notification.className += ' bg-green-500 text-white';
      break;
    case 'error':
      notification.className += ' bg-red-500 text-white';
      break;
    case 'warning':
      notification.className += ' bg-yellow-500 text-white';
      break;
    default:
      notification.className += ' bg-blue-500 text-white';
  }
  
  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
}

/**
 * Utility function to format file sizes
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Utility function to validate file types and sizes
 */
function validateFile(file, allowedTypes = ['image/jpeg', 'image/png', 'image/gif'], maxSize = 10485760) {
  if (!allowedTypes.includes(file.type)) {
    showNotification(`File type ${file.type} is not allowed`, 'error');
    return false;
  }
  
  if (file.size > maxSize) {
    showNotification(`File size ${formatFileSize(file.size)} exceeds limit of ${formatFileSize(maxSize)}`, 'error');
    return false;
  }
  
  return true;
}

// Export functions for use in other scripts
window.SnapFlow = {
  showNotification,
  formatFileSize,
  validateFile
};

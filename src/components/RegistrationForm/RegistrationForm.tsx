import styles from './RegistrationForm.module.css';
import useHandleRegistrationForm from '../../hooks/useHandleRegistrationForm';

function RegistrationForm() {
  const { register, handleSubmit, errors, isValid, onSubmit, error } = useHandleRegistrationForm();
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fieldWrap}>
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter your Full Name" id="name" {...register('name')} />
          <p className={styles.validationError}>{errors.name && errors.name.message}</p>
        </div>
        <div className={styles.fieldWrap}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" {...register('email')} />
          <p className={styles.validationError}>{errors.email && errors.email.message}</p>
        </div>
        <div className={styles.fieldWrap}>
          <label htmlFor="birthDate">Date of birth</label>
          <input type="date" placeholder="Enter your birth date" id="birthDate" {...register('birthDate')} />
          <p className={styles.validationError}>{errors.birthDate && errors.birthDate.message}</p>
        </div>
        <div className={styles.fieldWrap}>
          <h4 className={styles.cameFromTitle}>Where did you here about this event?</h4>
          <div className={styles.cameFromWrap}>
            <div>
              <label htmlFor="social">Social Media</label>
              <input type="radio" id="social" value="social" {...register('cameFrom')} />
            </div>
            <div>
              <label htmlFor="friends">Friends</label>
              <input type="radio" id="friends" value="friends" {...register('cameFrom')} />
            </div>
            <div>
              <label htmlFor="myself">Found myself</label>
              <input type="radio" id="myself" value="myself" {...register('cameFrom')} />
            </div>
          </div>
          <p className={styles.validationError}>{errors.cameFrom && errors.cameFrom.message}</p>
        </div>
        <div className={styles.buttonWrap}>
          <button className={`${styles.submitButton} button`} type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
        <p className={styles.registrationError}>{error && error}</p>
      </form>
    </div>
  );
}
export default RegistrationForm;

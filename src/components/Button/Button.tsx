import styles from './Button.module.css'
import clsx from 'clsx'

export const Button = ({ variant = 'primary', htmlType = 'button' }) => {
    const variantClasses = {
        // [ ]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.tertiary]: variant === 'tertiary',
    }

    const buttonClassNames = clsx(styles.root, variantClasses,
        //     {
        //     [styles.flat]: flat === true,
        //     [styles.raised]: flat === false,
        //     [styles.fluid]: fluid,
        //     [styles.loading_fixed_width]: loadingFixedWidth,
        //     [styles.loading]: loading,
        //     [styles.labelHiddenOnLoad]: loading && !showContentWhileLoading,
        //     [styles.icon]: iconOnly || (!children && children !== 0 && iconNode),
        //     [styles.disabled]: disabled,
        // }
    )

    return (
        null
        // <button className={buttonClassNames} type={htmlType}>About</button>
    )
}
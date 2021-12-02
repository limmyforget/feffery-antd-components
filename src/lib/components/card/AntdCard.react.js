import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义卡片部件AntdCard，api参数参考https://ant.design/components/card-cn/
export default class AntdCard extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            bodyStyle,
            headStyle,
            border,
            hoverable,
            size,
            title,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Card id={id}
                className={className}
                style={style}
                bodyStyle={bodyStyle}
                headStyle={headStyle}
                border={border}
                hoverable={hoverable}
                size={size}
                title={title}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Card>
        );
    }
}

// 定义参数或属性
AntdCard.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置内容区域自定义样式
    bodyStyle: PropTypes.object,

    // 设置标题区域自定义样式
    headStyle: PropTypes.object,

    // 设置是否有边框，默认为true
    border: PropTypes.bool,

    // 设置卡片鼠标悬浮时是否呈现浮起效果，默认为false
    hoverable: PropTypes.bool,

    // 设置卡片的尺寸，可选的有'default'与'small'，默认为'default'
    size: PropTypes.oneOf(['default', 'small']),

    // 设置卡片标题内容
    title: PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCard.defaultProps = {
}

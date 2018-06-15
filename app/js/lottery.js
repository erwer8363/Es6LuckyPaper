import 'babel-polyfill';
import Base from './lottery/base';
import Timer from './lottery/timer';
import Calculate from './lottery/calculate';
import Interface from './lottery/interface';
import $ from 'jquery';

const copyProperties = function (target, source) {
    for(let key of Reflect.ownKeys(source)){
        if(key !=='constructor'&&key !== 'prototype' && key !=='name'){
            let desc = Object.getOwnPropertyDescriptor(source,key);
            Object.defineProperty(target,key,desc);
        }
    }
}

const mix = function (...mixins) {
    class Mix{};
    for (let mixin of mixins){
        copyProperties(Mix,mixin);
        copyProperties(Mix.prototype,mixin.prototype);
    }
    return Mix;
}

class Lottery extends mix(Base,Timer,Calculate,Interface){
    constructor(name='cyy',cname='11选5',issue='**',state='**'){
        super();
        this.name = name;
        this.cname = cname;
        this.issue = issue;
        this.state = state;
        this.el = '';
        this.omit = new Map();
        this.open_code = new Set();
        this.open_code_list = new Set();
        this.play_list = new Map();
        this.number = new Set();
        this.issue_el = '#curr_issue';
        this.coundown_el = '#countdown';
        this.state_el = '.state_el';
        this.cart_el = '.codelist';
        this.omit_el = '';
        this.cur_play = 'r5';
        this.initPlayList();
        this.initNumber();
        this.updateState();
        this.initEvent();
    }

    updateState(){
        let self = this;
        self.getState().then((res)=>{
            this.issue = res.issue;
            this.end_time = res.end_time;
            this.state = res.state;
            $(this.issue_el).text(res.issue);
            this.countdown(this.end_time,(time)=>{
                $(this.coundown_el).html(time);
            },()=>{
                setTimeout(()=>{
                    this.updateState();
                    this.getOmit(this.issue).then((res)=>{

                    });
                    this.getOpenCode(this.issue).then((res)=>{

                    });
                },500)
            })
        })
    }

    initEvent(){
        let self=this;
        $('#plays').on('click','li',self.changePlayNav.bind(self));
        $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
        $('#confirm_sel_code').on('click',self.addCode.bind(self));
        $('.dxjo').on('click','li',self.assistHandle.bind(self));
        $('.qkmethod').on('click','.btn-middle',(e)=>this.getRandomCode(e));
        $('.lnk-calcel').on('click',(e)=>this.cancelCode(e));
        // $('.btn-middle').on('click',()=>this.clearCodeItems)
    }
}

export default Lottery;

